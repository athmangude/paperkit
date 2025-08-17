import React from 'react';
import type { DividerProps } from '../../types';
import './Divider.css';

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  spacing = 'medium',
  variant = 'default',
  className = '',
}) => {
  const dividerClasses = [
    'paper-divider',
    `paper-divider--${orientation}`,
    `paper-divider--${spacing}`,
    `paper-divider--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={dividerClasses} role="separator" />
  );
};
