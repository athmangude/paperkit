import React from 'react';
import type { IconButtonProps } from '../../types';
import './IconButton.css';

export const IconButton: React.FC<IconButtonProps> = ({
  icon,
  size = 'medium',
  variant = 'outline',
  disabled = false,
  onClick,
  type = 'button',
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const buttonClasses = [
    'paper-icon-button',
    `paper-icon-button--${size}`,
    `paper-icon-button--${variant}`,
    disabled ? 'paper-icon-button--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
      aria-label={typeof icon === 'string' ? icon : 'Icon button'}
    >
      <span className="paper-icon-button__icon">
        {icon}
      </span>
    </button>
  );
};
