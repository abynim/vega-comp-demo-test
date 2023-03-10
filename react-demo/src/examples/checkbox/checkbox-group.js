import { VegaCheckbox, VegaCheckboxGroup } from "@heartlandone/vega-react";

export default function App() {
  return (
    <VegaCheckboxGroup
      vegaFlexProp={{ gap: "size-12", direction: "col" }}
      value={["apple", "banana"]}
    >
      <VegaCheckbox identifier="apple" size="small">
        Apple
      </VegaCheckbox>
      <VegaCheckbox identifier="banana" size="small">
        Banana
      </VegaCheckbox>
      <VegaCheckbox identifier="orange" size="small">
        Orange
      </VegaCheckbox>
    </VegaCheckboxGroup>
  );
}
