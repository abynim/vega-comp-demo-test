import { VegaButtonCircle } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaButtonCircle
      variant={`primary`}
      disabled={false}
      size={`large`}
      icon={`hb-menu`}
      label={`This labels the button`}
    />
  );
};

export default App;
