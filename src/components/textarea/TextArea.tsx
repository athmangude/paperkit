import React, { forwardRef } from 'react';
import type { TextAreaProps } from '../../types';
import './TextArea.css';

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  name,
  id,
  rows = 4,
  cols,
  maxLength,
  className = '',
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const textareaClasses = [
    'paper-textarea',
    error ? 'paper-textarea--error' : '',
    disabled ? 'paper-textarea--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-textarea-wrapper">
      <textarea
        ref={ref}
        className={textareaClasses}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
        rows={rows}
        cols={cols}
        maxLength={maxLength}
      />
      {error && (
        <div className="paper-textarea__error">
          {error}
        </div>
      )}
      {maxLength && (
        <div className="paper-textarea__counter">
          {(value?.length || 0)} / {maxLength}
        </div>
      )}
    </div>
  );
});

TextArea.displayName = 'TextArea';
