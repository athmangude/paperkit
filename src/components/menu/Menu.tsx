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
      const itemValue = childProps.value;
      
      // Only handle onChange if the item has a value and onChange is provided
      if (itemValue && onChange) {
        return React.cloneElement(child, {
          selected: selectedValue === itemValue,
          onClick: () => handleItemClick(itemValue, childProps.onClick)
        });
      } else {
        // For items without value or when no onChange, just pass the selected state
        return React.cloneElement(child, {
          selected: selectedValue === itemValue
        });
      }
    }
    return child;
  });

  return (
    <div className={menuClasses}>
      {childrenWithProps}
    </div>
  );
};
