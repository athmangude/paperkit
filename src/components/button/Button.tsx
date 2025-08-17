import React from 'react';
import type { ButtonProps } from '../../types';
import './Button.css';

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'medium',
  variant = 'outline',
  disabled = false,
  onClick,
  type = 'button',
  icon,
  className = '',
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  const buttonClasses = [
    'paper-button',
    `paper-button--${size}`,
    `paper-button--${variant}`,
    disabled ? 'paper-button--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={handleClick}
      disabled={disabled}
    >
      {icon && <span className="paper-button__icon">{icon}</span>}
      {children}
    </button>
  );
};
