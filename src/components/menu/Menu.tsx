import React from 'react';
import type { MenuProps } from '../../types';
import './Menu.css';

export const Menu: React.FC<MenuProps> = ({
  children,
  selectedValue,
  className = '',
}) => {
  const menuClasses = [
    'paper-menu',
    className,
  ].filter(Boolean).join(' ');

  // Clone children and pass selectedValue to MenuItem components
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type && 
        (child.type as any).displayName === 'MenuItem') {
      return React.cloneElement(child, {
        selected: selectedValue === (child.props as any).value
      });
    }
    return child;
  });

  return (
    <div className={menuClasses}>
      {childrenWithProps}
    </div>
  );
};
