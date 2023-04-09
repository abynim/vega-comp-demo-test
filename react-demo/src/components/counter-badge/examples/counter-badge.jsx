import { VegaCounterBadge, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaCounterBadge offset={[5, 0]} color={`bg-danger`} dot={false} count={9}>
      <VegaButton>Button Example</VegaButton>
    </VegaCounterBadge>
  );
};
export default App;
