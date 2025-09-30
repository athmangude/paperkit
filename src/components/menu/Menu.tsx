import React from 'react';
import type { MenuProps } from '../../types';
import './Menu.css';

export const Menu: React.FC<MenuProps> = ({
  children,
  className = '',
}) => {
  const menuClasses = [
    'paper-menu',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={menuClasses}>
      {children}
    </div>
  );
};
