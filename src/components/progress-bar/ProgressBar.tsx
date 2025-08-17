import React from 'react';
import type { ProgressBarProps } from '../../types';
import './ProgressBar.css';

export const ProgressBar: React.FC<ProgressBarProps> = ({
  value = 0,
  max = 100,
  size = 'medium',
  variant = 'default',
  showLabel = false,
  className = '',
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  const progressClasses = [
    'paper-progress-bar',
    `paper-progress-bar--${size}`,
    `paper-progress-bar--${variant}`,
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className="paper-progress-bar-wrapper">
      <div className={progressClasses}>
        <div className="paper-progress-bar__track">
          <div 
            className="paper-progress-bar__fill"
            style={{ width: `${percentage}%` }}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin={0}
            aria-valuemax={max}
          ></div>
        </div>
      </div>
      {showLabel && (
        <div className="paper-progress-bar__label">
          {Math.round(percentage)}%
        </div>
      )}
    </div>
  );
};
