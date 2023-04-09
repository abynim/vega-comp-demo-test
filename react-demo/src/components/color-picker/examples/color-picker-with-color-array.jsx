import { useState } from "react";
import { VegaColorPicker, VegaFlex } from "@heartlandone/vega-react";

const App = () => {
  const [color, setColor] = useState("#CCCCCC");
  const onColorPickerChange = (evt) => {
    setColor(evt.currentTarget.value);
  };
  return (
    <VegaFlex direction={`col`}>
      <VegaColorPicker
        label={`Choose a Color`}
        value={color}
        autoValidation={true}
        hint={`Select a color from the list`}
        colors={[
          "#FFFFFF",
          "#000000",
          "#FF0000",
          "#CCCCCC",
          "#0000FF",
          "#00FFCC",
          "#FF00FF",
          "#99CC00",
        ]}
        onVegaChange={onColorPickerChange}
      />
      <div
        style={{
          marginTop: "12px",
          borderRadius: "8px",
          width: "200px",
          height: "200px",
          backgroundColor: color,
        }}
      />
    </VegaFlex>
  );
};

export default App;
