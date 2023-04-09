import { VegaDropdown, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  const sourceMap = {
    google: {
      label: "Google",
      key: "google",
      url: "https://google.com",
      group: "links",
    },
    vega: {
      label: "Vega",
      key: "vega",
      url: "https://vega.hlprd.com/",
      group: "links",
    },
    option3: { label: "Option3", key: "option3", url: "#", group: "options" },
  };
  const onLinkClick = (evt) => {
    window.open(sourceMap[evt.detail].url, "_blank");
  };
  return (
    <VegaDropdown
      source={Object.values(sourceMap)}
      onVegaDropdownClick={onLinkClick}
    >
      <VegaButton icon={`hb-menu`}>Menu</VegaButton>
    </VegaDropdown>
  );
};

export default App;
