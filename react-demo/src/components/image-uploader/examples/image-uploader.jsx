import { useRef } from "react";
import { VegaImageUploader } from "@heartlandone/vega-react";

const App = () => {
  const uploader = useRef();
  const onChange = async (evt) => {
    if (evt.detail) {
      uploader.current.status = "uploading";
      setTimeout(() => {
        uploader.current.status = "done";
      }, 3000);
    }
  };
  return <VegaImageUploader ref={uploader} onVegaChange={onChange} />;
};
export default App;
