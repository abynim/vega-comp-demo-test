import { useRef, useEffect } from "react";
import { VegaPagination } from "@heartlandone/vega-react";

const App = () => {
  const recordsPagination = useRef();
  useEffect(() => {
    recordsPagination.current.extensions = [
      ["currentPageLabel"],
      ["pageSelector"],
    ];
  });
  return (
    <VegaPagination
      ref={recordsPagination}
      current={1}
      pageSize={10}
      total={100}
    />
  );
};
export default App;
