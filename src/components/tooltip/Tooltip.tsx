import React, { useState, useRef, useEffect } from 'react';
import type { TooltipProps } from '../../types';
import './Tooltip.css';

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
  showArrow = true,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    if (isVisible && triggerRef.current) {
      const updatePosition = () => {
        if (!triggerRef.current || !tooltipRef.current) return;
        
        const triggerRect = triggerRef.current.getBoundingClientRect();
        const tooltipRect = tooltipRef.current.getBoundingClientRect();
        
        let x = 0;
        let y = 0;

        switch (position) {
          case 'top':
            x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            y = triggerRect.top - tooltipRect.height - 8;
            break;
          case 'bottom':
            x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
            y = triggerRect.bottom + 8;
            break;
          case 'left':
            x = triggerRect.left - tooltipRect.width - 8;
            y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            break;
          case 'right':
            x = triggerRect.right + 8;
            y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
            break;
        }

        // Ensure tooltip stays within viewport
        x = Math.max(8, Math.min(x, window.innerWidth - tooltipRect.width - 8));
        y = Math.max(8, Math.min(y, window.innerHeight - tooltipRect.height - 8));

        setTooltipPosition({ x, y });
      };

      // Small delay to ensure tooltip is rendered before calculating position
      const timer = setTimeout(() => {
        if (tooltipRef.current) {
          updatePosition();
        }
      }, 10);

      // Update position on scroll and resize
      const handleUpdate = () => {
        if (isVisible && tooltipRef.current) {
          updatePosition();
        }
      };

      window.addEventListener('scroll', handleUpdate, true);
      window.addEventListener('resize', handleUpdate);

      return () => {
        clearTimeout(timer);
        window.removeEventListener('scroll', handleUpdate, true);
        window.removeEventListener('resize', handleUpdate);
      };
    }
  }, [isVisible, position]);

  const tooltipClasses = [
    'paper-tooltip',
    `paper-tooltip--${position}`,
    isVisible ? 'paper-tooltip--visible' : 'paper-tooltip--hidden',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={triggerRef}
      className="paper-tooltip-trigger"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <div
        ref={tooltipRef}
        className={tooltipClasses}
        style={{
          left: tooltipPosition.x,
          top: tooltipPosition.y,
        }}
        role="tooltip"
      >
        {showArrow && <div className="paper-tooltip__arrow" />}
        <div className="paper-tooltip__content">
          {content}
        </div>
      </div>
    </div>
  );
};
