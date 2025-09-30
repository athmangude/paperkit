import React from 'react';
import type { MenuItemProps } from '../../types';
import './Menu.css';

export const MenuItem: React.FC<MenuItemProps> = ({
  children,
  onClick,
  disabled = false,
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
