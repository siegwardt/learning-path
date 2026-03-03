import React, { useState } from 'react';
import { validateEmail, validatePassword } from './validation';
import PasswordForm from './PasswordField';
import SubmitButtonForm from './SubmitButton';
import { FormProps } from './Form.types';
import EmailForm from './EmailField';
import './Form.css';

function Form() {
  const [formData, setFormData] = useState<FormProps>({
    email: '',
    password: ''
  });

  function handleChange(field: keyof FormProps, value: string) {
    setFormData(prev => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    const emailValidation = validateEmail(formData.email);
    const passwordValidation = validatePassword(formData.password);
    
    if (emailValidation.isValid && passwordValidation.isValid) {
      alert('Form erfolgreich gesendet!');
    }
  }

  const emailError = validateEmail(formData.email).message;
  const passwordError = validatePassword(formData.password).message;
  const isFormValid = !emailError && !passwordError && formData.email && formData.password;

  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit}>
        <h2 className="title">Login Form</h2>

        <EmailForm
          value={formData.email}
          onChange={(value) => handleChange('email', value)}
          error={emailError}
        />
        <PasswordForm
          value={formData.password}
          onChange={(value) => handleChange('password', value)}
          error={passwordError}
        />
        <SubmitButtonForm 
          onSubmit={() => {}} 
          disabled={!isFormValid}
        />
      </form>
    </div>
  );
}

export default Form;
