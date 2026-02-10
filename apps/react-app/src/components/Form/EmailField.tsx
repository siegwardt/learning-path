type Props = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  error?: string;
  errorId: string;
};

export default function EmailField({ id, value, onChange, onBlur, error, errorId }: Props) {
  const showError = Boolean(error);

  return (
    <div className="field">
      <label htmlFor={id}>Email</label>
      <input
        id={id}
        name="email"
        type="email"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
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
