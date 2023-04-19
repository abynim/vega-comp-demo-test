import { VegaFlex } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaFlex gap={`size-8`}>
      <div
        className={`v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8`}
      >
        Child Item 1
      </div>
      <div
        className={`v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8`}
      >
        Child Item 2
      </div>
      <div
        className={`v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8`}
      >
        Child Item 3
      </div>
    </VegaFlex>
  );
};
export default App;
