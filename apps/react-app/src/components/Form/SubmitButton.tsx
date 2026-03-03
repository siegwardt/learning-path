import { SubmitButtonFormProps } from "./Form.types";

function SubmitButtonForm({ onSubmit, disabled = false }: SubmitButtonFormProps) {
  return (
    <button 
      type="submit" 
      onClick={onSubmit} 
      disabled={disabled}
      className="btn"
    >
      Anmelden
    </button>
  );
}

export default SubmitButtonForm;