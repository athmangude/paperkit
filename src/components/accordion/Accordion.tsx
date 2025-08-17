import React, { useState } from 'react';
import type { AccordionProps, AccordionItemProps } from '../../types';
import './Accordion.css';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  defaultOpen = false,
  disabled = false,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const itemClasses = [
    'paper-accordion-item',
    isOpen ? 'paper-accordion-item--open' : 'paper-accordion-item--closed',
    disabled ? 'paper-accordion-item--disabled' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={itemClasses}>
      <button
        className="paper-accordion-item__header"
        onClick={handleToggle}
        disabled={disabled}
        aria-expanded={isOpen}
      >
        <span className="paper-accordion-item__title">{title}</span>
        <span className="paper-accordion-item__icon">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div className="paper-accordion-item__content">
        <div className="paper-accordion-item__body">
          {children}
        </div>
      </div>
    </div>
  );
};

export const Accordion: React.FC<AccordionProps> = ({
  children,
  className = '',
}) => {
  const accordionClasses = [
    'paper-accordion',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={accordionClasses}>
      {children}
    </div>
  );
};
