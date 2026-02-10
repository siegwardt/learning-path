import React, { useId, useMemo, useState } from "react";
import { useFormContext } from "../../context/FormContext";
import {
  hasErrors,
  type FormErrors,
  validateEmail,
  validatePassword,
  validateForm,
} from "../../validation";
import EmailField from "./EmailField";
import PasswordField from "./PasswordField";
import SubmitButton from "./SubmitButton";
import "./Form.css";

export default function Form() {
  const { formData, setFormData } = useFormContext();

  const [touched, setTouched] = useState<{ email: boolean; password: boolean }>({
    email: false,
    password: false,
  });

  const [submitSummary, setSubmitSummary] = useState("");

  const emailId = useId();
  const passwordId = useId();
  const emailErrorId = `${emailId}-error`;
  const passwordErrorId = `${passwordId}-error`;
  const summaryId = "form-summary";

  function setField<K extends keyof typeof formData>(key: K, value: (typeof formData)[K]) {
    setFormData({ ...formData, [key]: value });
  }

  function blur(field: "email" | "password") {
    setTouched((p) => ({ ...p, [field]: true }));
  }

  const fieldErrors: FormErrors = useMemo(() => {
    const errs: FormErrors = {};
    if (touched.email) errs.email = validateEmail(formData.email);
    if (touched.password) errs.password = validatePassword(formData.password);
    if (!errs.email) delete errs.email;
    if (!errs.password) delete errs.password;
    return errs;
  }, [formData.email, formData.password, touched.email, touched.password]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched({ email: true, password: true });

    const allErrors = validateForm(formData);
    if (hasErrors(allErrors)) {
      setSubmitSummary("Please fix the errors below and try again.");
      return;
    }

    setSubmitSummary("");
    alert("Success!");
  }

  return (
    <div className="page">
      <form className="card" onSubmit={handleSubmit} noValidate aria-describedby={summaryId}>
        <h1 className="title">Login</h1>

        <div id={summaryId} className="summary" aria-live="polite" role="status">
          {submitSummary}
        </div>

        <EmailField
          id={emailId}
          value={formData.email}
          onChange={(v) => setField("email", v)}
          onBlur={() => blur("email")}
          error={fieldErrors.email}
          errorId={emailErrorId}
        />

        <PasswordField
          id={passwordId}
          value={formData.password}
          onChange={(v) => setField("password", v)}
          onBlur={() => blur("password")}
          error={fieldErrors.password}
          errorId={passwordErrorId}
        />

        <SubmitButton />
      </form>
    </div>
  );
}
