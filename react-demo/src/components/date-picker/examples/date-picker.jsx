import { VegaDatePicker } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaDatePicker
      label={`Single mode`}
      mode={`single`}
      size={`small`}
      format={`MM/DD/YYYY`}
      clearButton={true}
    />
  );
};
export default App;
