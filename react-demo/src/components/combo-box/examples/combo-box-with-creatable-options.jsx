import { useRef } from "react";
import { VegaComboBox } from "@heartlandone/vega-react";

const App = () => {
  const comboBox = useRef();
  const onCreate = (evt) => {
    comboBox.current.source.push({ key: evt.detail, label: evt.detail });
    comboBox.current.value = [...comboBox.current.value, evt.detail];
  };
  return (
    <VegaComboBox
      ref={comboBox}
      label={`label text`}
      required={true}
      source={[
        { key: "key1", label: "option 1" },
        { key: "key2", label: "option 2" },
        { key: "key3", label: "option 3" },
      ]}
      vegaDropdownProps={{ dynamicOption: true }}
      onVegaCreate={onCreate}
    />
  );
};
export default App;
