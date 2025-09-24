import React from 'react';
import type { BadgeProps } from '../../types';
import './Badge.css';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  size = 'small',
  icon,
  className = '',
}) => {
  const badgeClasses = [
    'paper-badge',
    `paper-badge--${size}`,
    `paper-badge--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  // Format the content - show "99+" for numbers > 99
  const formatContent = (content: React.ReactNode): React.ReactNode => {
    if (typeof content === 'number') {
      return content > 99 ? '99+' : content.toString();
    }
    if (typeof content === 'string') {
      const num = parseInt(content, 10);
      if (!isNaN(num) && num > 99) {
        return '99+';
      }
    }
    return content;
  };

  return (
    <div className={badgeClasses}>
      {icon && (
        <span className="paper-badge__icon">
          {icon}
        </span>
      )}
      <span className="paper-badge__content">
        {formatContent(children)}
      </span>
    </div>
  );
};
