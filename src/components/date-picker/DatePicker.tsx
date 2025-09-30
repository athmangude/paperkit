import React, { useState, useEffect, useRef, useCallback } from 'react';
import type { DatePickerProps } from '../../types';
import { Button } from '../button';
import { IconButton } from '../icon-button';
import { Modal } from '../modal';
import { FaCalendarAlt, FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './DatePicker.css';

// Utility functions for date calculations
const getDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (year: number, month: number): number => {
  return new Date(year, month, 1).getDay();
};

const getMonthName = (month: number, locale: string = 'en-US'): string => {
  return new Date(2021, month, 1).toLocaleDateString(locale, { month: 'long' });
};

const getDayName = (day: number, locale: string = 'en-US'): string => {
  return new Date(2021, 0, day + 3).toLocaleDateString(locale, { weekday: 'short' });
};

const formatDate = (date: Date, format: string = 'MM/DD/YYYY'): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  
  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year.toString());
};



export const DatePicker: React.FC<DatePickerProps> = ({
  value,
  onChange,
  placeholder = 'Select date...',
  format = 'MM/DD/YYYY',
  locale = 'en-US',
  showTimePicker = false,
  timeFormat = '12h',
  minDate,
  maxDate,
  disabled = false,
  className = '',
  allowClear = true,
  showToday = true,
  showWeekNumbers = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(value || null);
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(value ? value.getMonth() : new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(value ? value.getFullYear() : new Date().getFullYear());
  const [selectedTime, setSelectedTime] = useState<{ hours: number; minutes: number }>({
    hours: value ? value.getHours() : 12,
    minutes: value ? value.getMinutes() : 0,
  });
  
  const inputRef = useRef<HTMLInputElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);

  // Generate calendar grid
  const generateCalendarDays = useCallback(() => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDayOfMonth = getFirstDayOfMonth(currentYear, currentMonth);
    const days: Array<{ date: Date; isCurrentMonth: boolean; isToday: boolean; isSelected: boolean; isDisabled: boolean }> = [];

    // Previous month days
    const prevMonth = currentMonth === 0 ? 11 : currentMonth - 1;
    const prevYear = currentMonth === 0 ? currentYear - 1 : currentYear;
    const daysInPrevMonth = getDaysInMonth(prevYear, prevMonth);
    
    for (let i = firstDayOfMonth - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const date = new Date(prevYear, prevMonth, day);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        isSelected: selectedDate ? date.toDateString() === selectedDate.toDateString() : false,
        isDisabled: Boolean((minDate && date < minDate) || (maxDate && date > maxDate)),
      });
    }

    // Current month days
    const today = new Date();
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(currentYear, currentMonth, day);
      days.push({
        date,
        isCurrentMonth: true,
        isToday: date.toDateString() === today.toDateString(),
        isSelected: selectedDate ? date.toDateString() === selectedDate.toDateString() : false,
        isDisabled: Boolean((minDate && date < minDate) || (maxDate && date > maxDate)),
      });
    }

    // Next month days
    const nextMonth = currentMonth === 11 ? 0 : currentMonth + 1;
    const nextYear = currentMonth === 11 ? currentYear + 1 : currentYear;
    const remainingDays = 42 - days.length; // 6 rows * 7 days
    
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(nextYear, nextMonth, day);
      days.push({
        date,
        isCurrentMonth: false,
        isToday: false,
        isSelected: selectedDate ? date.toDateString() === selectedDate.toDateString() : false,
        isDisabled: Boolean((minDate && date < minDate) || (maxDate && date > maxDate)),
      });
    }

    return days;
  }, [currentYear, currentMonth, selectedDate, minDate, maxDate]);

  // Navigation handlers
  const goToPreviousMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const goToNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(today.getMonth());
    setCurrentYear(today.getFullYear());
    setSelectedDate(today);
    setSelectedTime({
      hours: today.getHours(),
      minutes: today.getMinutes(),
    });
  };

  // Date selection handler
  const handleDateSelect = (date: Date) => {
    if (date.getTime() === selectedDate?.getTime()) {
      // Same date selected, close picker
      handleConfirm();
      return;
    }
    
    setSelectedDate(date);
  };

  // Time selection handlers
  const handleTimeChange = (type: 'hours' | 'minutes', value: number) => {
    setSelectedTime(prev => ({
      ...prev,
      [type]: value,
    }));
  };

  // Confirm selection
  const handleConfirm = () => {
    if (selectedDate) {
      const finalDate = new Date(selectedDate);
      if (showTimePicker) {
        finalDate.setHours(selectedTime.hours, selectedTime.minutes, 0, 0);
      }
      onChange?.(finalDate);
    }
    setIsOpen(false);
  };

  // Clear selection
  const handleClear = () => {
    setSelectedDate(null);
    onChange?.(null);
    setIsOpen(false);
  };

  // Keyboard navigation
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (event.key) {
      case 'Escape':
        setIsOpen(false);
        break;
      case 'Enter':
        handleConfirm();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        goToPreviousMonth();
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNextMonth();
        break;
    }
  };

  // Focus management
  useEffect(() => {
    if (isOpen && calendarRef.current) {
      const focusableElement = calendarRef.current.querySelector('[tabindex="0"]') as HTMLElement;
      if (focusableElement) {
        focusableElement.focus();
      }
    }
  }, [isOpen]);

  const calendarDays = generateCalendarDays();
  const displayValue = selectedDate ? formatDate(selectedDate, format) : '';

  return (
    <div className={`paper-date-picker ${className}`}>
      <div className="paper-date-picker__input-wrapper">
        <input
          ref={inputRef}
          type="text"
          value={displayValue}
          placeholder={placeholder}
          readOnly
          disabled={disabled}
          className="paper-date-picker__input"
          onClick={() => !disabled && setIsOpen(true)}
          onKeyDown={handleKeyDown}
          aria-label="Date picker input"
          aria-expanded={isOpen}
          aria-haspopup="dialog"
        />
        <IconButton
          icon={<FaCalendarAlt />}
          size="small"
          onClick={() => !disabled && setIsOpen(true)}
          disabled={disabled}
          className="paper-date-picker__trigger"
          aria-label="Open date picker"
        />
        {allowClear && selectedDate && (
          <IconButton
            icon={<FaTimes />}
            size="small"
            onClick={handleClear}
            disabled={disabled}
            className="paper-date-picker__clear"
            aria-label="Clear date"
          />
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        size="small"
        className="paper-date-picker__modal"
      >
        <div className="paper-date-picker__calendar" ref={calendarRef}>
          {/* Header */}
          <div className="paper-date-picker__header">
            <IconButton
              icon={<FaChevronLeft />}
              onClick={goToPreviousMonth}
              aria-label="Previous month"
            />
            <div className="paper-date-picker__current-month">
              <span className="paper-date-picker__month">
                {getMonthName(currentMonth, locale)}
              </span>
              <span className="paper-date-picker__year">
                {currentYear}
              </span>
            </div>
            <IconButton
              icon={<FaChevronRight />}
              onClick={goToNextMonth}
              aria-label="Next month"
            />
          </div>

          {/* Week days */}
          <div className="paper-date-picker__weekdays">
            {showWeekNumbers && <div className="paper-date-picker__week-number-header">#</div>}
            {Array.from({ length: 7 }, (_, i) => (
              <div key={i} className="paper-date-picker__weekday">
                {getDayName(i, locale)}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          <div className="paper-date-picker__grid">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                className={`
                  paper-date-picker__day
                  ${day.isCurrentMonth ? 'paper-date-picker__day--current-month' : 'paper-date-picker__day--other-month'}
                  ${day.isToday ? 'paper-date-picker__day--today' : ''}
                  ${day.isSelected ? 'paper-date-picker__day--selected' : ''}
                  ${day.isDisabled ? 'paper-date-picker__day--disabled' : ''}
                  ${hoveredDate && day.date.toDateString() === hoveredDate.toDateString() ? 'paper-date-picker__day--hovered' : ''}
                `}
                onClick={() => !day.isDisabled && handleDateSelect(day.date)}
                onMouseEnter={() => setHoveredDate(day.date)}
                onMouseLeave={() => setHoveredDate(null)}
                disabled={day.isDisabled}
                tabIndex={day.isCurrentMonth ? 0 : -1}
                aria-label={`${day.date.getDate()} ${getMonthName(day.date.getMonth(), locale)} ${day.date.getFullYear()}`}
                aria-selected={day.isSelected}
                aria-disabled={day.isDisabled}
              >
                {showWeekNumbers && index % 7 === 0 && (
                  <span className="paper-date-picker__week-number">
                    {Math.floor(index / 7) + 1}
                  </span>
                )}
                <span className="paper-date-picker__day-number">
                  {day.date.getDate()}
                </span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="paper-date-picker__footer">
            {showToday && (
              <Button
                size="small"
                variant="outline"
                onClick={goToToday}
              >
                Today
              </Button>
            )}
            <div className="paper-date-picker__actions">
              <Button
                size="small"
                variant="outline"
                onClick={() => setIsOpen(false)}
              >
                Cancel
              </Button>
              <Button
                size="small"
                variant="primary"
                onClick={handleConfirm}
                disabled={!selectedDate}
              >
                OK
              </Button>
            </div>
          </div>

          {/* Time picker */}
          {showTimePicker && (
            <div className="paper-date-picker__time">
              <div className="paper-date-picker__time-label">Time</div>
              <div className="paper-date-picker__time-inputs">
                <select
                  value={selectedTime.hours}
                  onChange={(e) => handleTimeChange('hours', parseInt(e.target.value))}
                  className="paper-date-picker__time-select"
                  aria-label="Hours"
                >
                  {Array.from({ length: timeFormat === '12h' ? 12 : 24 }, (_, i) => {
                    const hour = timeFormat === '12h' ? (i === 0 ? 12 : i) : i;
                    return (
                      <option key={i} value={timeFormat === '12h' ? (i === 0 ? 12 : i) : i}>
                        {hour.toString().padStart(2, '0')}
                      </option>
                    );
                  })}
                </select>
                <span className="paper-date-picker__time-separator">:</span>
                <select
                  value={selectedTime.minutes}
                  onChange={(e) => handleTimeChange('minutes', parseInt(e.target.value))}
                  className="paper-date-picker__time-select"
                  aria-label="Minutes"
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                {timeFormat === '12h' && (
                  <select
                    value={selectedTime.hours >= 12 ? 'PM' : 'AM'}
                    onChange={(e) => {
                      const isPM = e.target.value === 'PM';
                      const newHour = isPM ? 
                        (selectedTime.hours % 12 + 12) : 
                        (selectedTime.hours % 12);
                      handleTimeChange('hours', newHour);
                    }}
                    className="paper-date-picker__time-select"
                    aria-label="AM/PM"
                  >
                    <option value="AM">AM</option>
                    <option value="PM">PM</option>
                  </select>
                )}
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
