import { VegaLoadingIndicator } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaLoadingIndicator
      mode={`determinate`}
      shape={`bar`}
      label={`Loading Data 35%`}
      hint={`Please wait`}
      percent={35}
      size={`large`}
    />
  );
};
export default App;
