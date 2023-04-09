import { VegaTimePicker } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTimePicker
      label={`Pick a time`}
      size={`small`}
      timeFormat={`24-hour`}
    />
  );
};
export default App;
