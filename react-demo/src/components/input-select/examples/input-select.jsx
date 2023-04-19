import { VegaInputSelect } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaInputSelect
      required={false}
      placeholder={`placeholder text`}
      maxHeight={400}
      autoValidation={true}
      source={[
        { id: "id1", displayName: "name1" },
        { id: "id2", displayName: "name2" },
        { id: "id3", displayName: "name3" },
        { id: "id4", displayName: "name4" },
      ]}
    />
  );
};
export default App;
