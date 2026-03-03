import { ValidationResult } from "./Form.types";

export function validateEmail(email: string): ValidationResult {
  if (!email.trim()) {
    return {
      isValid: false,
      message: 'Email ist erforderlich'
    };
  }
  
  if (!email.includes('@')) {
    return {
      isValid: false,
      message: 'Email muss ein @ enthalten'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
}

export function validatePassword(password: string): ValidationResult {
  if (!password.trim()) {
    return {
      isValid: false,
      message: 'Passwort ist erforderlich'
    };
  }
  
  if (password.length <= 6) {
    return {
      isValid: false,
      message: 'Passwort muss länger als 6 Zeichen sein'
    };
  }
  
  if (password.includes(' ')) {
    return {
      isValid: false,
      message: 'Passwort darf keine Leerzeichen enthalten'
    };
  }
  
  return {
    isValid: true,
    message: ''
  };
}
