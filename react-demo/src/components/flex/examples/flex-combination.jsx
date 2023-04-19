import { VegaFlex } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaFlex gap={`size-8`}>
      <div
        className={`v-bg-action v-font-p2-short v-text-inverted-primary v-w-size-40 v-bg-action vega-flex-shrink-0`}
      >
        Child Item 1
      </div>
      <div>
        <VegaFlex gap={`size-8`}>
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
          <div
            className={`v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8`}
          >
            Child Item 4
          </div>
        </VegaFlex>
      </div>
    </VegaFlex>
  );
};
export default App;
