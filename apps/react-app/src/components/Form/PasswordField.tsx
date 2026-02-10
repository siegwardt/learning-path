type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  errorId: string;
};

export default function PasswordField({ id, value, onChange, onBlur, error, errorId }: Props) {
  const showError = Boolean(error);

  return (
    <div className="field">
      <label htmlFor={id}>Password</label>
      <input
        id={id}
        name="password"
        type="password"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
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
