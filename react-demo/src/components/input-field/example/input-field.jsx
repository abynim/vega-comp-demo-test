import { VegaInput } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaInput
      name={`phone`}
      label={`Phone number`}
      value={`(555) 555-5555`}
      autoComplete={`off`}
      prefixIcon={`mobile-phone`}
      required={true}
      maxLength={14}
      autoValidation={true}
      maskConfig={{ type: "phone" }}
      hint={`Enter your telephone number`}
      showClearIcon={true}
    />
  );
};
export default App;
