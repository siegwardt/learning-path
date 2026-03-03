export interface FormProps {
  email: string;
  password: string;
}

export interface EmailFormProps {
  value: string;
  onChange: (value: string) => void;
  error: string;
}

export interface PasswordFormProps {
  value: string;
  onChange: (value: string) => void;
  error: string;
}

export interface SubmitButtonFormProps {
  onSubmit: () => void;
  disabled?: boolean;
}

export interface ValidationResult {
  isValid: boolean;
  message: string;
}