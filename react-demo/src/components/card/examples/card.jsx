import { VegaCard } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaCard
      padding={`size-24`}
      margin={`size-8`}
      variant={`shadow`}
      backgroundColor={`bg-primary`}
    >
      <div className={`v-font-p2-short v-text-primary`}>
        Content for the card goes here.
      </div>
    </VegaCard>
  );
};

export default App;
