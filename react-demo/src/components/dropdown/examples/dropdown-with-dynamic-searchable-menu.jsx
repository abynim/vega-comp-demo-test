import { useRef } from "react";
import { VegaDropdown, VegaButton } from "@heartlandone/vega-react";

const App = () => {
  const dropdown = useRef();
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
  const onCreate = (evt) => {
    dropdown.current.source.push({ key: evt.detail, label: evt.detail });
    dropdown.current.value = [...dropdown.current.value, evt.detail];
  };
  return (
    <VegaDropdown
      source={Object.values(sourceMap)}
      onVegaDropdownClick={onLinkClick}
      searchable={true}
      dynamicOption={true}
      onVegaCreate={onCreate}
    >
      <VegaButton icon={`hb-menu`}>Menu</VegaButton>
    </VegaDropdown>
  );
};

export default App;
