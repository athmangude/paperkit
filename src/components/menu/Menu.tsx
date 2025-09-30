import React from 'react';
import type { MenuProps } from '../../types';
import './Menu.css';

export const Menu: React.FC<MenuProps> = ({
  children,
  selectedValue,
  onChange,
  className = '',
}) => {
  const menuClasses = [
    'paper-menu',
    className,
  ].filter(Boolean).join(' ');

  const handleItemClick = (value: string, originalOnClick?: () => void) => {
    if (onChange) {
      onChange(value);
    }
    if (originalOnClick) {
      originalOnClick();
    }
  };

  // Clone children and pass selectedValue and click handler to MenuItem components
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child) && child.type && 
        (child.type as any).displayName === 'MenuItem') {
      const childProps = child.props as any;
      return React.cloneElement(child, {
        selected: selectedValue === childProps.value,
        onClick: () => handleItemClick(childProps.value, childProps.onClick)
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
