import React from 'react';
import type { HeadingProps, LinkProps } from '../../types';
import './Typography.css';

export const Heading: React.FC<HeadingProps> = ({
  level,
  children,
  className = '',
}) => {
  const headingClasses = [
    'paper-heading',
    `paper-heading--${level}`,
    'wavy-underline',
    className,
  ].filter(Boolean).join(' ');

  switch (level) {
    case 1:
      return <h1 className={headingClasses}>{children}</h1>;
    case 2:
      return <h2 className={headingClasses}>{children}</h2>;
    case 3:
      return <h3 className={headingClasses}>{children}</h3>;
    default:
      return <h1 className={headingClasses}>{children}</h1>;
  }
};

export const Link: React.FC<LinkProps> = ({
  href,
  external = false,
  children,
  className = '',
}) => {
  const linkClasses = [
    'paper-link',
    'hand-drawn-underline',
    className,
  ].filter(Boolean).join(' ');

  const props = external ? {
    target: '_blank',
    rel: 'noopener noreferrer',
  } : {};

  return (
    <a href={href} className={linkClasses} {...props}>
      {children}
      {external && (
        <span className="paper-link__external">↗</span>
      )}
    </a>
  );
};

export const BodyText: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = '',
}) => {
  const textClasses = [
    'paper-body-text',
    className,
  ].filter(Boolean).join(' ');

  return (
    <p className={textClasses}>
      {children}
    </p>
  );
};
