import React from 'react';
import type { ListProps, ListItemProps } from '../../types';
import './List.css';

export const ListItem: React.FC<ListItemProps> = ({
  icon,
  title,
  subtitle,
  onClick,
  selected = false,
  className = '',
}) => {
  const itemClasses = [
    'paper-list-item',
    onClick ? 'paper-list-item--clickable' : '',
    selected ? 'paper-list-item--selected' : '',
    className,
  ].filter(Boolean).join(' ');

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={itemClasses}
      onClick={handleClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={onClick ? (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      } : undefined}
    >
      {icon && (
        <div className="paper-list-item__icon">
          {icon}
        </div>
      )}
      <div className="paper-list-item__content">
        {title && (
          <div className="paper-list-item__title">{title}</div>
        )}
        {subtitle && (
          <div className="paper-list-item__subtitle">{subtitle}</div>
        )}
      </div>
    </div>
  );
};

export const List: React.FC<ListProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  className = '',
}) => {
  const listClasses = [
    'paper-list',
    `paper-list--${variant}`,
    `paper-list--${size}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={listClasses} role="list">
      {children}
    </div>
  );
};
