import { VegaFlex, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  const openNotify = (evt) => {
    const button = evt.currentTarget;
    const type = button.id;
    window.VegaNotify.open({
      type: type,
      message: `${button.textContent.toUpperCase()}`,
    });
  };
  return (
    <VegaFlex
      gap={`size-16`}
      direction={{ default: "row", S: "col", M: "row" }}
    >
      <VegaButton id={`warning`} onVegaClick={openNotify} variant={`secondary`}>
        Warning
      </VegaButton>
      <VegaButton id={`success`} variant={`secondary`} onVegaClick={openNotify}>
        Success
      </VegaButton>
      <VegaButton id={`error`} variant={`secondary`} onVegaClick={openNotify}>
        Error
      </VegaButton>
      <VegaButton id={`info`} variant={`secondary`} onVegaClick={openNotify}>
        Info
      </VegaButton>
    </VegaFlex>
  );
};

export default App;
