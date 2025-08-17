import React from 'react';
import type { CardProps } from '../../types';
import './Card.css';

export const Card: React.FC<CardProps> = ({
  children,
  elevation = 'medium',
  padding = 'medium',
  className = '',
}) => {
  const cardClasses = [
    'paper-card',
    `paper-card--${elevation}`,
    `paper-card--${padding}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
};
