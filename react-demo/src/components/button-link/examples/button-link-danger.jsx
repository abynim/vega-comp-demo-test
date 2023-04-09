import { VegaButtonLink } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaButtonLink
      danger={true}
      link={`https://heartland.us`}
      onVegaClick={() => {}}
    >
      Link Label
    </VegaButtonLink>
  );
};

export default App;
