import React, { forwardRef } from 'react';
import type { InputProps } from '../../types';
import './Input.css';

export const Input = forwardRef<HTMLInputElement, InputProps>(({
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  disabled = false,
  required = false,
  name,
  id,
  className = '',
}, ref) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  const inputClasses = [
    'paper-input',
    error ? 'paper-input--error' : '',
    disabled ? 'paper-input--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-input-wrapper">
      <input
        ref={ref}
        type={type}
        className={inputClasses}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        disabled={disabled}
        required={required}
        name={name}
        id={id}
      />
      {error && (
        <div className="paper-input__error">
          {error}
        </div>
      )}
    </div>
  );
});

Input.displayName = 'Input';
