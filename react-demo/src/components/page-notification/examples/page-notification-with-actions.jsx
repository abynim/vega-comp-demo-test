import { VegaFlex, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  const openNotifyWithAction = async () => {
    const id = await window.VegaNotify.open({
      title: "Title",
      duration: 0,
      message:
        "This notification will not be closed, because the duration is set 0",
      actionButtons: [
        {
          label: "Confirm",
          onVegaClick: () => {
            window.VegaNotify.close(id);
          },
        },
      ],
    });
  };
  const openNotifyWithActions = async () => {
    const id = await window.VegaNotify.open({
      title: "Title",
      duration: 10000,
      message: `This notification will close after 10s`,
      actionButtons: [
        {
          label: "Cancel",
          onVegaClick: () => {
            window.VegaNotify.close(id);
          },
        },
        {
          label: "OK",
          onVegaClick: () => {
            window.VegaNotify.close(id);
          },
        },
      ],
    });
  };
  return (
    <VegaFlex gap={`size-16`}>
      <VegaButton onVegaClick={openNotifyWithAction}>With action</VegaButton>
      <VegaButton variant={`secondary`} onVegaClick={openNotifyWithActions}>
        With actions
      </VegaButton>
    </VegaFlex>
  );
};

export default App;
