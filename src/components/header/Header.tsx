import React from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Button, Heading } from '../index';
import './Header.css';

interface HeaderProps {
  title?: string;
  showNavigation?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ 
  title = "Paperkit",
  showNavigation = true 
}) => {
  const location = useLocation();
  
  const getButtonVariant = (path: string) => {
    return location.pathname === path ? 'primary' : 'outline';
  };

  return (
    <header className="paper-header">
      <div className="header-content">
        <RouterLink to="/" className="header-title-link">
          <Heading level={1} className="header-title">{title}</Heading>
        </RouterLink>
        {showNavigation && (
          <nav className="header-nav">
            <RouterLink to="/showcase">
              <Button variant={getButtonVariant('/showcase')}>Showcase</Button>
            </RouterLink>
            <RouterLink to="/documentation">
              <Button variant={getButtonVariant('/documentation')}>Documentation</Button>
            </RouterLink>
            <RouterLink to="/about">
              <Button variant={getButtonVariant('/about')}>About</Button>
            </RouterLink>
          </nav>
        )}
      </div>
    </header>
  );
};
