import React, { useState, useRef, useEffect } from 'react';
import type { DropdownMenuProps } from '../../types';
import './DropdownMenu.css';

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  trigger,
  children,
  placement = 'bottom-left',
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
  };

  const dropdownClasses = [
    'paper-dropdown-menu',
    `paper-dropdown-menu--${placement}`,
    isOpen ? 'paper-dropdown-menu--open' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-dropdown-menu-container" ref={dropdownRef}>
      <div className="paper-dropdown-menu-trigger" onClick={handleTriggerClick}>
        {trigger}
      </div>
      {isOpen && (
        <div className={dropdownClasses}>
          {children}
        </div>
      )}
    </div>
  );
};
