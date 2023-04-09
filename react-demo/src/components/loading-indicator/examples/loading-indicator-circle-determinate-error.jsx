import { useRef, useState, useEffect } from "react";
import {
  VegaLoadingIndicator,
  VegaFlex,
  VegaIcon,
} from "@heartlandone/vega-react";

const App = () => {
  const errorLoader = useRef();
  let [percentage, setPercentage] = useState(0);
  const simulatePercentage = () => {
    errorLoader.current.percent = 0;
    setPercentage(0);
    const errorLoaderTimer = setInterval(() => {
      if (errorLoader.current.percent < 80) {
        errorLoader.current.percent += 1;
        errorLoader.current.label = `${errorLoader.current.percent}%`;
        errorLoader.current.hint = null;
      } else {
        errorLoader.current.status = `error`;
        errorLoader.current.label = `Error`;
        errorLoader.current.hint = `${errorLoader.current.percent}%`;
        clearInterval(errorLoaderTimer);
      }
    }, 30);
  };
  useEffect(() => {
    simulatePercentage();
  }, []);

  return (
    <VegaFlex direction={`col`}>
      <VegaLoadingIndicator
        ref={errorLoader}
        mode={`determinate`}
        percent={percentage}
        size={`large`}
      />
      <VegaIcon icon={`far fa-rotate-right`} onClick={simulatePercentage} />
    </VegaFlex>
  );
};
export default App;
