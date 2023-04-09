import { VegaStepper } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaStepper
      value={1}
      max={5}
      min={0}
      label={`Quantity`}
      buttonVariant={`primary`}
    />
  );
};
export default App;
