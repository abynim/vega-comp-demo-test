import { VegaTooltip, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTooltip
      size={100}
      content={`This is a tooltip`}
      trigger={`hover`}
      placement={`top`}
    >
      <VegaButton>Hover Me</VegaButton>
    </VegaTooltip>
  );
};
export default App;
