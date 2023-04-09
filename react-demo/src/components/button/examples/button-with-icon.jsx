import { VegaButton } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaButton
      variant={`primary`}
      disabled={false}
      onVegaClick={() => {}}
      icon={`announcement`}
      iconAlign={`left`}
    >
      Checkout
    </VegaButton>
  );
};

export default App;
