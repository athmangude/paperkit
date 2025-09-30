import React from 'react';
import type { MenuItemProps } from '../../types';
import './Menu.css';

export const MenuItem: React.FC<MenuItemProps & { selected?: boolean }> = ({
  children,
  onClick,
  disabled = false,
  value,
  selected = false,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const menuItemClasses = [
    'paper-menu-item',
    disabled ? 'paper-menu-item--disabled' : '',
    selected ? 'paper-menu-item--selected' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      className={menuItemClasses}
      onClick={handleClick}
    >
      {children}
    </div>
  );
};

// Set display name for Menu component to identify it
MenuItem.displayName = 'MenuItem';
