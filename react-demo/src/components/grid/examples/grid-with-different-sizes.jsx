import { VegaGrid } from "@heartlandone/vega-react";

const App = () => {
  return (
    <vega-grid column={2} gap={`size-16`}>
      <div
        className="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
        style={{ gridColumn: `1 /  span 2` }}
      >
        Child Item 1
      </div>
      <div
        className="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
        style={{ gridRow: `span 2` }}
      >
        Child Item 2
      </div>
      <div className="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8">
        Child Item 3
      </div>
      <div
        className="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
        style={{ gridColumn: 2 }}
      >
        Child Item 4
      </div>
      <div
        className="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
        style={{ gridColumn: `1 /  span 2` }}
      >
        Child Item 5
      </div>
    </vega-grid>
  );
};

export default App;
