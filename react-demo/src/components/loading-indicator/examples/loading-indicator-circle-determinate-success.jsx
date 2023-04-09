import { useRef, useState, useEffect } from "react";
import {
  VegaLoadingIndicator,
  VegaFlex,
  VegaIcon,
} from "@heartlandone/vega-react";

const App = () => {
  const successLoader = useRef();
  let [percentage, setPercentage] = useState(0);
  const simulatePercentage = () => {
    successLoader.current.percent = 0;
    setPercentage(0);
    const successLoaderTimer = setInterval(() => {
      if (successLoader.current.percent < 100) {
        successLoader.current.percent += 1;
        successLoader.current.label = `${successLoader.current.percent}%`;
      } else {
        successLoader.current.status = "success";
        successLoader.current.Label = "Success";
        clearInterval(successLoaderTimer);
      }
    }, 30);
  };
  useEffect(() => {
    simulatePercentage();
  }, []);

  return (
    <VegaFlex direction={`col`}>
      <VegaLoadingIndicator
        ref={successLoader}
        mode={`determinate`}
        percent={percentage}
        size={`large`}
        label={`${percentage}%`}
      />
      <VegaIcon icon={`far fa-rotate-right`} onClick={simulatePercentage} />
    </VegaFlex>
  );
};
export default App;
