import { VegaChip } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaChip
      text={`Chip`}
      chipType={`status`}
      statusColor={`bg-status-success`}
    />
  );
};
export default App;
