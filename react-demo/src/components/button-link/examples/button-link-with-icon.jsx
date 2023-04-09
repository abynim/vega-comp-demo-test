import { VegaButtonLink } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaButtonLink
      size={`large`}
      icon={`hb-menu`}
      type={`icon-left`}
      label={`Link Label`}
      link={`https://heartland.us`}
      iconType={`icon`}
    >
      Link Label
    </VegaButtonLink>
  );
};

export default App;
