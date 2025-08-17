import React from 'react';
import type { CheckboxProps } from '../../types';
import './Checkbox.css';

export const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  id,
  className = '',
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const checkboxClasses = [
    'paper-checkbox',
    checked ? 'paper-checkbox--checked' : '',
    disabled ? 'paper-checkbox--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className="paper-checkbox-wrapper">
      <input
        type="checkbox"
        className="paper-checkbox__input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={name}
        id={id}
      />
      <div className={checkboxClasses}>
        {checked && (
          <svg
            className="paper-checkbox__check"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20,6 9,17 4,12"></polyline>
          </svg>
        )}
      </div>
      {label && (
        <span className="paper-checkbox__label">
          {label}
        </span>
      )}
    </label>
  );
};
