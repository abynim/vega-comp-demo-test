import { VegaFlex, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  const openNotifyWithTitle = () => {
    window.VegaNotify.open({
      title: "Title",
      message:
        "This is the content of notification. This is the content of notification.This is the content of notification.This is the content of notification.",
    });
  };
  const openNotifyWithoutTitle = () => {
    window.VegaNotify.open({
      message: "No title notification",
    });
  };
  return (
    <VegaFlex gap={`size-16`}>
      <VegaButton onVegaClick={openNotifyWithTitle}>With title</VegaButton>
      <VegaButton variant={`secondary`} onVegaClick={openNotifyWithoutTitle}>
        No title
      </VegaButton>
    </VegaFlex>
  );
};

export default App;
