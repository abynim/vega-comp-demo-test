import { VegaCounterBadge, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaCounterBadge color={`bg-danger`} dot={true} count={9}>
      <VegaButton>Button Example</VegaButton>
    </VegaCounterBadge>
  );
};
export default App;
