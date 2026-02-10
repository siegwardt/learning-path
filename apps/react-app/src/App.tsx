import { Form } from "./components/Form";
import { FormProvider } from "./context/FormContext";

export default function App() {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  );
}
