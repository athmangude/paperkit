/**
 * Telemetry-aware wrapper components for Protokit website
 * 
 * IMPORTANT: These wrappers are ONLY for the website and must NEVER be
 * imported into any files within src/components/ directory to maintain
 * component library integrity and prevent telemetry leakage to library consumers.
 */

import React from 'react';
import type { ReactNode, MouseEvent } from 'react';
import { useTelemetry } from '../hooks/useTelemetry';

interface TelemetryButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  pageName: string;
  buttonText: string;
  properties?: Record<string, any>;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export const TelemetryButton: React.FC<TelemetryButtonProps> = ({
  children,
  onClick,
  pageName,
  buttonText,
  properties,
  className,
  disabled,
  type = 'button',
}) => {
  const { trackButtonClick } = useTelemetry(pageName);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    trackButtonClick(buttonText, properties);
    if (onClick) {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

interface TelemetryLinkProps {
  children: ReactNode;
  href: string;
  pageName: string;
  linkText: string;
  properties?: Record<string, any>;
  className?: string;
  external?: boolean;
}

export const TelemetryLink: React.FC<TelemetryLinkProps> = ({
  children,
  href,
  pageName,
  properties,
  className,
  external = false,
}) => {
  const { trackNavigation } = useTelemetry(pageName);

  const handleClick = () => {
    trackNavigation(href, { ...properties, external });
  };

  return (
    <a
      href={href}
      className={className}
      onClick={handleClick}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  );
};

interface TelemetryFormProps {
  children: ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  pageName: string;
  formName: string;
  properties?: Record<string, any>;
  className?: string;
}

export const TelemetryForm: React.FC<TelemetryFormProps> = ({
  children,
  onSubmit,
  pageName,
  formName,
  properties,
  className,
}) => {
  const { trackFormSubmit } = useTelemetry(pageName);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    trackFormSubmit(formName, properties);
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      {children}
    </form>
  );
};

interface TelemetryCodeBlockProps {
  children: ReactNode;
  pageName: string;
  codeType: string;
  properties?: Record<string, any>;
  className?: string;
}

export const TelemetryCodeBlock: React.FC<TelemetryCodeBlockProps> = ({
  children,
  pageName,
  codeType,
  properties,
  className,
}) => {
  const { trackCodeCopy } = useTelemetry(pageName);

  const handleCopy = () => {
    trackCodeCopy(codeType, properties);
  };

  return (
    <div className={className}>
      {children}
      <button onClick={handleCopy} style={{ marginLeft: '8px', fontSize: '12px' }}>
        Copy
      </button>
    </div>
  );
};
