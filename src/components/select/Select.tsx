import React, { useState, useRef, useEffect } from 'react';
import type { SelectProps } from '../../types';
import './Select.css';

export const Select: React.FC<SelectProps> = ({
  value,
  onChange,
  placeholder = 'Select an option',
  disabled = false,
  error,
  options,
  name,
  id,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleOptionClick = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue);
    }
    setIsOpen(false);
  };

  const selectedOption = options.find(option => option.value === value);
  const displayValue = selectedOption ? selectedOption.label : placeholder;

  const selectClasses = [
    'paper-select',
    disabled ? 'paper-select--disabled' : '',
    error ? 'paper-select--error' : '',
    isOpen ? 'paper-select--open' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-select-container" ref={selectRef}>
      <div
        className={selectClasses}
        onClick={handleToggle}
        role="button"
        tabIndex={disabled ? -1 : 0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleToggle();
          }
        }}
      >
        <span className="paper-select-value">{displayValue}</span>
        <span className="paper-select-arrow">▼</span>
      </div>
      
      {error && <div className="paper-select-error">{error}</div>}
      
      {isOpen && (
        <div className="paper-select-dropdown">
          {options.map((option) => (
            <div
              key={option.value}
              className={`paper-select-option ${
                option.value === value ? 'paper-select-option--selected' : ''
              } ${option.disabled ? 'paper-select-option--disabled' : ''}`}
              onClick={() => !option.disabled && handleOptionClick(option.value)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
      
      {name && <input type="hidden" name={name} value={value || ''} />}
    </div>
  );
};
