import React from 'react';
import type { HeroProps } from '../../types';
import './Hero.css';

export const Hero: React.FC<HeroProps> = ({
  children,
  className = '',
}) => {
  const heroClasses = [
    'paper-hero',
    className,
  ].filter(Boolean).join(' ');

  return (
    <section className={heroClasses}>
      {children}
    </section>
  );
};
