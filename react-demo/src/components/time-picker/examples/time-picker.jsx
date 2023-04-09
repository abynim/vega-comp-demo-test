import { VegaTimePicker } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTimePicker
      label={`Pick a time`}
      size={`small`}
      timeFormat={`12-hour`}
    />
  );
};
export default App;
