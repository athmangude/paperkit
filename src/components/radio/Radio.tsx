import React from 'react';
import type { RadioProps } from '../../types';
import './Radio.css';

export const Radio: React.FC<RadioProps> = ({
  checked = false,
  onChange,
  disabled = false,
  label,
  name,
  id,
  value,
  group,
  className = '',
}) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  const radioClasses = [
    'paper-radio',
    checked ? 'paper-radio--checked' : '',
    disabled ? 'paper-radio--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <label className="paper-radio-wrapper">
      <input
        type="radio"
        className="paper-radio__input"
        checked={checked}
        onChange={handleChange}
        disabled={disabled}
        name={group || name}
        id={id}
        value={value}
      />
      <div className={radioClasses}>
        {checked && (
          <div className="paper-radio__dot"></div>
        )}
      </div>
      {label && (
        <span className="paper-radio__label">
          {label}
        </span>
      )}
    </label>
  );
};
