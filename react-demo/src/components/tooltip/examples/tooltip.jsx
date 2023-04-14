import { VegaTooltip, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTooltip
      content={`This is a tooltip`}
      trigger={`hover`}
      placement={`top`}
    >
      <VegaButton>Hover Me</VegaButton>
    </VegaTooltip>
  );
};
export default App;
