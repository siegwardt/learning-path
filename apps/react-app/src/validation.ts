import type { FormData } from "./context/FormContext";

export interface FormErrors {
  email?: string;
  password?: string;
}

export function validateEmail(email: string): string | undefined {
  if (!email.includes("@")) return 'Email must contain "@"';
  return undefined;
}

export function validatePassword(password: string): string | undefined {
  if (password.length < 6) return "Password must be at least 6 characters";
  return undefined;
}

export function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {
    email: validateEmail(data.email),
    password: validatePassword(data.password),
  };

  if (!errors.email) delete errors.email;
  if (!errors.password) delete errors.password;

  return errors;
}

export function hasErrors(errors: FormErrors): boolean {
  return Boolean(errors.email || errors.password);
}
