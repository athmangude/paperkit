import React from 'react';
import type { BadgeProps } from '../../types';
import './Badge.css';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  icon,
  className = '',
}) => {
  const badgeClasses = [
    'paper-badge',
    `paper-badge--${size}`,
    `paper-badge--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={badgeClasses}>
      {icon && (
        <span className="paper-badge__icon">
          {icon}
        </span>
      )}
      <span className="paper-badge__content">
        {children}
      </span>
    </div>
  );
};
