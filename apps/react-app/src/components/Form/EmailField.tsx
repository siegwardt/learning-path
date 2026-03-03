import { useState } from "react";
import { EmailFormProps } from "./Form.types";

function EmailForm({ value, onChange, error }: EmailFormProps) {
  const [touched, setTouched] = useState(false);
  const showError = Boolean(touched && error);
  const id = "email-field";
  const errorId = "email-error";

  return (
    <div className="field">
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        name="email"
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={() => setTouched(true)}
        aria-invalid={showError}
        aria-describedby={showError ? errorId : undefined}
        autoComplete="email"
      />
      <p id={errorId} className={`error ${showError ? "visible" : ""}`} aria-live="polite">
        {showError ? error : ""}
      </p>
    </div>
  );
}

export default EmailForm;