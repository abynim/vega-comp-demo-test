import { VegaComboBox } from "@heartlandone/vega-react";

const App = () => {
  return (
    <div style={{ minWidth: "300px" }}>
      <VegaComboBox
        label={`label text`}
        required={true}
        source={[
          { key: "key1", label: "option 1" },
          { key: "key2", label: "option 2" },
          { key: "key3", label: "option 3" },
        ]}
      />
    </div>
  );
};
export default App;
