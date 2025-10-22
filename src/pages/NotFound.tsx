import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { Button, Card, Heading, BodyText, Link } from '../components/index';
import { useTelemetry } from '../hooks/useTelemetry';
import './NotFound.css';

function NotFound() {
  const [searchParams] = useSearchParams();
  const [originalPath, setOriginalPath] = useState<string | null>(null);
  const [isRedirected, setIsRedirected] = useState(false);
  
  const { trackComponentInteraction } = useTelemetry('404');

  useEffect(() => {
    // Check if this is a redirected 404
    const redirected = searchParams.get('redirected');
    const original = searchParams.get('original');
    const invalid = searchParams.get('invalid');
    
    if (redirected === 'true' && original) {
      setIsRedirected(true);
      setOriginalPath(original);
      
      // Track the 404 event
      trackComponentInteraction('404', invalid === 'true' ? 'invalid_route_404' : 'redirected_404', { 
        originalPath: original,
        currentPath: window.location.pathname,
        isInvalid: invalid === 'true'
      });
    }
  }, [searchParams, trackComponentInteraction]);

  const handleGoHome = () => {
    trackComponentInteraction('404', 'go_home');
    window.location.href = '/';
  };

  const handleGoBack = () => {
    trackComponentInteraction('404', 'go_back');
    window.history.back();
  };

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <Card elevation="high" padding="large">
          <div className="not-found-content">
            <Heading level={1} className="not-found-title">
              Oops! Page Not Found
            </Heading>
            
            <BodyText className="not-found-message">
              {isRedirected && originalPath ? (
                <>
                  The page <strong>"{originalPath}"</strong> doesn't exist.
                </>
              ) : (
                <>
                  The page you're looking for doesn't exist or has been moved.
                </>
              )}
            </BodyText>

            {isRedirected && originalPath && (
              <div className="not-found-url-info">
                <BodyText className="not-found-url-text">
                  <strong>Attempted URL:</strong> /{originalPath}
                </BodyText>
              </div>
            )}

            <div className="not-found-actions">
              <Button variant="primary" onClick={handleGoHome}>
                Go to Homepage
              </Button>
              <Button variant="outline" onClick={handleGoBack}>
                Go Back
              </Button>
            </div>

            <div className="not-found-navigation">
              <Heading level={3} className="not-found-nav-title">
                Popular Pages
              </Heading>
              <div className="not-found-nav-links">
                <RouterLink to="/">
                  <Button variant="outline" size="small">Home</Button>
                </RouterLink>
                <RouterLink to="/showcase">
                  <Button variant="outline" size="small">Showcase</Button>
                </RouterLink>
                <RouterLink to="/documentation">
                  <Button variant="outline" size="small">Documentation</Button>
                </RouterLink>
                <RouterLink to="/about">
                  <Button variant="outline" size="small">About</Button>
                </RouterLink>
              </div>
            </div>

            <div className="not-found-footer">
              <BodyText className="not-found-footer-text">
                If you believe this is an error, please{' '}
                <Link href="https://github.com/athmangude/protokit-ui/issues" external>
                  report the issue
                </Link>
                {' '}on GitHub.
              </BodyText>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default NotFound;
