import { VegaFlex } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaFlex alignItem={`center`} justifyContent={`space-between`}>
      <div
        className={`v-bg-action v-font-p2-short v-text-inverted-primary v-h-size-112 v-w-size-80 v-min-w-min vega-flex-shrink-0`}
      >
        Child 1
      </div>
      <div
        className={`v-bg-action  v-font-p2-short v-text-inverted-primary v-h-size-112 v-w-size-80 v-min-w-min vega-flex-shrink-0`}
      >
        Child 2
      </div>
      <div
        className={`v-bg-action v-font-p2-short v-text-inverted-primary v-h-size-48 v-w-size-80 v-min-w-min vega-flex-shrink-0`}
      >
        Child 3
      </div>
    </VegaFlex>
  );
};
export default App;
