import { VegaAppFooter } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaAppFooter
      termOfUseLabel={`Terms of use`}
      privacyPolicyLabel={`Privacy Policy`}
      additionalLinks={[{ label: "Another Link", URL: "https://google.com" }]}
    />
  );
};

export default App;
