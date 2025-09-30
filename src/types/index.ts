// Common component props
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

// Button component types
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonVariant = 'primary' | 'secondary' | 'outline';

export interface ButtonProps extends BaseComponentProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  icon?: React.ReactNode;
}

// Icon Button component types
export interface IconButtonProps extends BaseComponentProps {
  icon: React.ReactNode;
  size?: ButtonSize;
  variant?: ButtonVariant;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

// Input component types
export interface InputProps extends BaseComponentProps {
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
}

export interface TextAreaProps extends Omit<InputProps, 'type'> {
  rows?: number;
  cols?: number;
  maxLength?: number;
}

// Checkbox and Radio types
export interface CheckboxProps extends BaseComponentProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  name?: string;
  id?: string;
}

export interface RadioProps extends Omit<CheckboxProps, 'onChange'> {
  value?: string;
  group?: string;
  onChange?: (value: string | boolean) => void;
}

// Toggle Switch types
export interface ToggleProps extends BaseComponentProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  id?: string;
}

// Slider types
export interface SliderProps extends BaseComponentProps {
  min?: number;
  max?: number;
  value?: number;
  onChange?: (value: number) => void;
  disabled?: boolean;
  step?: number;
  showValue?: boolean;
}

// Progress Bar types
export interface ProgressBarProps extends BaseComponentProps {
  value?: number;
  max?: number;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  showLabel?: boolean;
}

// Card types
export interface CardProps extends BaseComponentProps {
  elevation?: 'low' | 'medium' | 'high';
  padding?: 'small' | 'medium' | 'large';
}

// Badge types
export interface BadgeProps extends BaseComponentProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
}

// Tag types
export interface TagProps extends BaseComponentProps {
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';
  size?: 'small' | 'medium' | 'large';
  removable?: boolean;
  onRemove?: () => void;
}

// Divider types
export interface DividerProps extends BaseComponentProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'light' | 'dashed' | 'dotted' | 'wavy';
}

// Modal types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'small' | 'medium' | 'large';
}

// Notification types
export type NotificationType = 'success' | 'error' | 'warning' | 'info';

export interface NotificationProps extends BaseComponentProps {
  type?: NotificationType;
  title?: string;
  message: string;
  duration?: number;
  onClose?: () => void;
}

// Tooltip types
export interface TooltipProps extends BaseComponentProps {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  showArrow?: boolean;
}

// Tabs types
export interface TabsProps extends BaseComponentProps {
  defaultActiveTab?: number;
  onChange?: (index: number) => void;
}

export interface TabItemProps extends BaseComponentProps {
  label: string;
  disabled?: boolean;
}

// Accordion types
export interface AccordionProps extends BaseComponentProps {
  allowMultiple?: boolean;
}

export interface AccordionItemProps extends BaseComponentProps {
  title: string;
  defaultOpen?: boolean;
  disabled?: boolean;
}

// Date Picker types
export type DateFormat = 'MM/DD/YYYY' | 'DD/MM/YYYY' | 'YYYY-MM-DD' | 'MM-DD-YYYY';
export type TimeFormat = '12h' | '24h';
export type Locale = 'en-US' | 'en-GB' | 'es-ES' | 'fr-FR' | 'de-DE' | 'it-IT' | 'pt-BR' | 'ja-JP' | 'ko-KR' | 'zh-CN';

export interface DatePickerProps extends BaseComponentProps {
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  placeholder?: string;
  format?: DateFormat;
  locale?: Locale;
  showTimePicker?: boolean;
  timeFormat?: TimeFormat;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  allowClear?: boolean;
  showToday?: boolean;
  showWeekNumbers?: boolean;
}

export interface DatePickerState {
  isOpen: boolean;
  currentDate: Date;
  selectedDate: Date | null;
  hoveredDate: Date | null;
  currentMonth: number;
  currentYear: number;
  selectedTime: {
    hours: number;
    minutes: number;
  };
}

// List types
export interface ListProps extends BaseComponentProps {
  variant?: 'default' | 'outlined' | 'filled';
  size?: 'small' | 'medium' | 'large';
}

export interface ListItemProps extends BaseComponentProps {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
  selected?: boolean;
}

// Pagination types
export interface PaginationProps extends BaseComponentProps {
  currentPage?: number;
  totalPages?: number;
  onPageChange?: (page: number) => void;
  showFirstLast?: boolean;
  showPrevNext?: boolean;
  maxVisiblePages?: number;
}

// Table types
export interface TableProps extends BaseComponentProps {
  variant?: 'default' | 'bordered' | 'striped';
  size?: 'small' | 'medium' | 'large';
}

export interface TableHeaderProps extends BaseComponentProps {}

export interface TableRowProps extends BaseComponentProps {}

export interface TableCellProps extends BaseComponentProps {
  'data-label'?: string;
}

// Typography types
export interface HeadingProps extends BaseComponentProps {
  level: 1 | 2 | 3;
  children: React.ReactNode;
}

export interface LinkProps extends BaseComponentProps {
  href: string;
  external?: boolean;
  children: React.ReactNode;
}

// Form types
export interface FormProps extends BaseComponentProps {
  onSubmit?: (data: any) => void;
  children: React.ReactNode;
}

export interface FormFieldProps extends BaseComponentProps {
  label?: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}

// Hero types
export interface HeroProps extends BaseComponentProps {
  children: React.ReactNode;
}

// Navigation Bar types
export interface NavigationBarProps extends BaseComponentProps {
  title?: string;
  navigationComponents?: React.ReactNode;
}

// Menu types
export interface MenuProps extends BaseComponentProps {
  children: React.ReactNode;
  selectedValue?: string;
}

export interface MenuItemProps extends BaseComponentProps {
  onClick?: () => void;
  disabled?: boolean;
  value?: string;
  children: React.ReactNode;
}

// Dropdown Menu types
export interface DropdownMenuProps extends BaseComponentProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
}

// Select Input types
export interface SelectProps extends BaseComponentProps {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  name?: string;
  id?: string;
}
