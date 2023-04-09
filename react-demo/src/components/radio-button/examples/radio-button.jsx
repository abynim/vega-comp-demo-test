import { VegaRadioGroup, VegaRadio } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaRadioGroup
      vegaFlexProp={{
        gap: `size-8`,
        direction: `col`,
        breakpoint: `None`,
        alignItem: `start`,
        justifyContent: `start`,
        margin: 0,
      }}
      name={`fruit`}
      value={`apple`}
      label={`Select a fruit`}
    >
      <VegaRadio value={`apple`}>Apple</VegaRadio>
      <VegaRadio value={`orange`}>Orange</VegaRadio>
    </VegaRadioGroup>
  );
};
export default App;
