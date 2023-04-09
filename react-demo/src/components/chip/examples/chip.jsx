import { useRef } from "react";
import { VegaChip } from "@heartlandone/vega-react";

const App = () => {
  const chip = useRef();
  const closeChip = () => {
    chip.current.remove();
  };
  return (
    <VegaChip
      ref={chip}
      text={`Chip`}
      clickable={true}
      showCloseIcon={true}
      onVegaClick={null}
      onVegaClose={closeChip}
    />
  );
};
export default App;
