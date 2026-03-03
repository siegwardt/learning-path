import { useState } from "react";
import { PasswordFormProps } from "./Form.types";

function PasswordForm({ value, onChange, error }: PasswordFormProps) {
  const [touched, setTouched] = useState(false);
  const showError = Boolean(touched && error);
  const id = "password-field";
  const errorId = "password-error";

  return (
    <div className="field">
      <label htmlFor={id}>Password</label>
      <input
        id={id}
        name="password"
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={showError}
        aria-describedby={showError ? errorId : undefined}
        autoComplete="current-password"
      />
      <p id={errorId} className={`error ${showError ? "visible" : ""}`} aria-live="polite">
        {showError ? error : ""}
      </p>
    </div>
  );
}

export default PasswordForm;