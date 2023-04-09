import { useRef, useEffect } from "react";
import { VegaProgressTracker } from "@heartlandone/vega-react";

const App = () => {
  const progressTracker = useRef();
  useEffect(() => {
    progressTracker.current.steps = [
      "Basic Information",
      "Contact Information",
      "Emergency Contact",
      "W-2 Forms",
    ];
  });
  return (
    <VegaProgressTracker
      ref={progressTracker}
      direction={`horizontal`}
      current={1}
    />
  );
};

export default App;
