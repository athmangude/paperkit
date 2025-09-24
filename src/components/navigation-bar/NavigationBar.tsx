import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Heading } from '../index';
import type { NavigationBarProps } from '../../types';
import './NavigationBar.css';

export const NavigationBar: React.FC<NavigationBarProps> = ({
  title = "Paperkit",
  navigationComponents,
  className = '',
}) => {
  const navigationClasses = [
    'paper-navigation-bar',
    className,
  ].filter(Boolean).join(' ');

  return (
    <header className={navigationClasses}>
      <div className="navigation-content">
        <RouterLink to="/" className="navigation-title-link">
          <Heading level={1} className="navigation-title">{title}</Heading>
        </RouterLink>
        {navigationComponents && (
          <nav className="navigation-nav">
            {navigationComponents}
          </nav>
        )}
      </div>
    </header>
  );
};
