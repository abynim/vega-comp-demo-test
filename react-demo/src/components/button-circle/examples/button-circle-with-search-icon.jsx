import { VegaButtonCircle } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaButtonCircle
      variant={`primary`}
      disabled={false}
      size={`small`}
      icon={`search`}
      danger={false}
      label={`This labels the button`}
    />
  );
};

export default App;
