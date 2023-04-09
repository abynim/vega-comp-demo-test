import { VegaChip } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaChip
      text={`Chip`}
      variant={`outlined`}
      size={{ default: "extra-small", S: "small", M: "default", L: "large" }}
    />
  );
};
export default App;
