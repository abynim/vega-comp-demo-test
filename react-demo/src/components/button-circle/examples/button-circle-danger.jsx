import { VegaButtonCircle } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaButtonCircle
      variant={`primary`}
      disabled={false}
      size={`small`}
      icon={`close`}
      label={`This labels the button`}
      danger={true}
    />
  );
};

export default App;
