import React from 'react';
import type { TagProps } from '../../types';
import './Tag.css';

export const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'medium',
  removable = false,
  onRemove,
  className = '',
}) => {
  const tagClasses = [
    'paper-tag',
    `paper-tag--${size}`,
    `paper-tag--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  const handleRemove = (event: React.MouseEvent) => {
    event.stopPropagation();
    onRemove?.();
  };

  return (
    <div className={tagClasses}>
      <span className="paper-tag__content">
        {children}
      </span>
      {removable && (
        <button
          className="paper-tag__remove"
          onClick={handleRemove}
          aria-label="Remove tag"
        >
          ✕
        </button>
      )}
    </div>
  );
};
