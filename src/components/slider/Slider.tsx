import React, { useState, useRef, useEffect } from 'react';
import type { SliderProps } from '../../types';
import './Slider.css';

export const Slider: React.FC<SliderProps> = ({
  min = 0,
  max = 100,
  value = 50,
  onChange,
  disabled = false,
  step = 1,
  showValue = false,
  className = '',
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [currentValue, setCurrentValue] = useState(value);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCurrentValue(value);
  }, [value]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (disabled) return;
    setIsDragging(true);
    updateValue(e);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || disabled) return;
    updateValue(e);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateValue = (e: MouseEvent | React.MouseEvent) => {
    if (!sliderRef.current) return;

    const rect = sliderRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percentage = Math.max(0, Math.min(1, x / width));
    const newValue = Math.round((percentage * (max - min) + min) / step) * step;
    
    if (newValue !== currentValue) {
      setCurrentValue(newValue);
      if (onChange) {
        onChange(newValue);
      }
    }
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging]);

  const percentage = ((currentValue - min) / (max - min)) * 100;

  const sliderClasses = [
    'paper-slider',
    disabled ? 'paper-slider--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-slider-wrapper">
      <div
        ref={sliderRef}
        className={sliderClasses}
        onMouseDown={handleMouseDown}
      >
        <div className="paper-slider__track">
          <div 
            className="paper-slider__fill"
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
        <div 
          className="paper-slider__thumb"
          style={{ left: `${percentage}%` }}
        ></div>
      </div>
      {showValue && (
        <div className="paper-slider__value">
          {currentValue}
        </div>
      )}
    </div>
  );
};
