import { VegaDatePicker } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaDatePicker
      label={`Min & Max Date Range`}
      mode={`range`}
      maxDate="05/20/2022"
      minDate="05/10/2022"
    />
  );
};
export default App;
