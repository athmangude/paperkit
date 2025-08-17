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

export interface RadioProps extends CheckboxProps {
  value?: string;
  group?: string;
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

// Card types
export interface CardProps extends BaseComponentProps {
  elevation?: 'low' | 'medium' | 'high';
  padding?: 'small' | 'medium' | 'large';
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

// List types
export interface ListItemProps extends BaseComponentProps {
  icon?: React.ReactNode;
  title?: string;
  subtitle?: string;
  onClick?: () => void;
}

// Divider types
export interface DividerProps extends BaseComponentProps {
  orientation?: 'horizontal' | 'vertical';
  spacing?: 'small' | 'medium' | 'large';
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
