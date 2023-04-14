import { VegaLoadingIndicator } from "@heartlandone/vega-react";

const App = () => {
  return (
    <div style={{ minWidth: "300px" }}>
      <VegaLoadingIndicator mode={`indeterminate`} shape={`bar`} />
    </div>
  );
};
export default App;
