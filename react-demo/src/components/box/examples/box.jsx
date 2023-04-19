import { VegaBox } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaBox
      className={`v-text-primary v-font-p1-short`}
      padding={{
        default: {
          top: 0,
          bottom: "size-40",
        },
        S: {
          left: 0,
          right: 0,
          bottom: "size-80",
        },
        M: {
          left: "size-80",
          right: "size-80",
        },
      }}
      margin={{
        default: {
          bottom: 0,
        },
        S: {
          bottom: "size-40",
        },
        M: {
          bottom: 0,
        },
      }}
    >
      test
    </VegaBox>
  );
};

export default App;
