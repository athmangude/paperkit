import React, { useEffect } from 'react';
import type { ModalProps } from '../../types';
import './Modal.css';

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'medium',
  className = '',
}) => {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClasses = [
    'paper-modal',
    `paper-modal--${size}`,
    className,
  ].filter(Boolean).join(' ');

  const handleBackdropClick = (event: React.MouseEvent) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="paper-modal-overlay" onClick={handleBackdropClick}>
      <div className={modalClasses}>
        <div className="paper-modal__header">
          {title && (
            <h2 className="paper-modal__title">{title}</h2>
          )}
          <button
            className="paper-modal__close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
        <div className="paper-modal__content">
          {children}
        </div>
      </div>
    </div>
  );
};
