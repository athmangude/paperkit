import React from 'react';
import type { ToggleProps } from '../../types';
import './Toggle.css';

export const Toggle: React.FC<ToggleProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  id,
  className = '',
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const toggleClasses = [
    'paper-toggle',
    checked ? 'paper-toggle--checked' : '',
    disabled ? 'paper-toggle--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className="paper-toggle-wrapper">
      <input
        type="checkbox"
        className="paper-toggle__input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        id={id}
      />
      <div className={toggleClasses}>
        <div className="paper-toggle__track">
          <div className="paper-toggle__thumb"></div>
        </div>
      </div>
      {label && (
        <span className="paper-toggle__label">
          {label}
        </span>
      )}
    </label>
  );
};
