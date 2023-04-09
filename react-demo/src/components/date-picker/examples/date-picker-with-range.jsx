import { VegaDatePicker } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaDatePicker
      label={`Range mode`}
      mode={`range`}
      size={`small`}
      format={`MM/DD/YYYY`}
      clearButton={true}
      allowRepick={true}
    />
  );
};
export default App;
