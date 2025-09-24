import React, { useEffect, useState } from 'react';
import type { NotificationProps } from '../../types';
import { Badge } from '../badge';
import './Notification.css';

export const Notification: React.FC<NotificationProps> = ({
  type = 'info',
  title,
  message,
  duration = 5000,
  onClose,
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        handleClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [duration]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      onClose?.();
    }, 300); // Wait for animation to complete
  };

  const notificationClasses = [
    'paper-notification',
    `paper-notification--${type}`,
    isVisible ? 'paper-notification--visible' : 'paper-notification--hidden',
    className,
  ].filter(Boolean).join(' ');

  const getIcon = () => {
    switch (type) {
      case 'success':
        return '✓';
      case 'error':
        return '✕';
      case 'warning':
        return '⚠';
      case 'info':
      default:
        return 'ℹ';
    }
  };

  const getBadgeVariant = () => {
    switch (type) {
      case 'success':
        return 'success';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
      case 'info':
      default:
        return 'default';
    }
  };

  return (
    <div className={notificationClasses}>
      <div className="paper-notification__icon">
        <Badge variant={getBadgeVariant()} size="small">
          {getIcon()}
        </Badge>
      </div>
      <div className="paper-notification__content">
        {title && (
          <div className="paper-notification__title">{title}</div>
        )}
        <div className="paper-notification__message">{message}</div>
      </div>
      <button
        className="paper-notification__close"
        onClick={handleClose}
        aria-label="Close notification"
      >
        ✕
      </button>
    </div>
  );
};
