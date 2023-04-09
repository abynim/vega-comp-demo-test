import { VegaPagination } from "@heartlandone/vega-react";

const App = () => {
  return <VegaPagination current={1} pageSize={10} total={100} />;
};
export default App;
