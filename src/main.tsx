import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/globals.css'
import App from './App.tsx'
import Documentation from './pages/Documentation.tsx'
import Showcase from './pages/Showcase.tsx'
import About from './pages/About.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/protokit-ui">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/showcase" element={<Showcase />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
