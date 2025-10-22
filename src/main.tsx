import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, useNavigate, useSearchParams } from 'react-router-dom'
import './styles/globals.css'
import App from './App.tsx'
import Documentation from './pages/Documentation.tsx'
import Showcase from './pages/Showcase.tsx'
import About from './pages/About.tsx'
import NotFound from './pages/NotFound.tsx'
import { TelemetryProvider } from './telemetry/TelemetryProvider'

// Component to handle initial route and invalid route redirects
function RouteHandler() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    // Check for initial route from HTML file
    const initialRoute = (window as any).__INITIAL_ROUTE__;
    if (initialRoute) {
      navigate(initialRoute, { replace: true });
      return;
    }

    // Check for invalid route redirect from 404.html
    const invalid = searchParams.get('invalid');
    const original = searchParams.get('original');
    
    if (invalid === 'true' && original) {
      // Clear URL parameters and show 404
      window.history.replaceState({}, '', window.location.pathname);
      navigate('/404', { replace: true });
    }
  }, [navigate, searchParams]);

  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/showcase" element={<Showcase />} />
      <Route path="/documentation" element={<Documentation />} />
      <Route path="/about" element={<About />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TelemetryProvider>
      <BrowserRouter basename="/protokit-ui">
        <RouteHandler />
      </BrowserRouter>
    </TelemetryProvider>
  </StrictMode>,
)
