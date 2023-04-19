import { useState } from "react";
import {
  VegaTabGroup,
  VegaTabGroupPanel,
  VegaFlex,
} from "@heartlandone/vega-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("nav-home");
  const onTabClick = (e) => {
    setActiveTab(e.detail);
  };
  return (
    <VegaFlex direction={`col`} className={`example-container`}>
      <VegaTabGroup
        gap={`size-8`}
        showCloseButton={true}
        tabItems={[
          { label: "Home", dataTarget: "nav-home", prefixIcon: "home" },
          { label: "Profile", dataTarget: "nav-profile" },
          { label: "Contact", dataTarget: "nav-contact" },
          { label: "Contact2", dataTarget: "nav-contact4" },
          { label: "Contact3", dataTarget: "nav-contact5" },
          { label: "Contact4", dataTarget: "nav-contact6" },
          { label: "Contact5", dataTarget: "nav-contact7" },
          { label: "Contact6", dataTarget: "nav-contact8" },
          { label: "Contact7", dataTarget: "nav-contact9" },
          { label: "Contact8", dataTarget: "nav-contact10" },
        ]}
        onVegaClick={onTabClick}
        className={`v-w-full`}
        positionRelativeTo={`.example-container`}
      >
        <VegaTabGroupPanel id={`nav-home`} className={`v-py-size-24`}>
          <div className={`v-font-p2-short v-text-primary`}>
            This is the Home tab
          </div>
        </VegaTabGroupPanel>
        <VegaTabGroupPanel id={`nav-profile`} className={`v-py-size-24`}>
          <div className={`v-font-p2-short v-text-primary`}>Profile tab</div>
        </VegaTabGroupPanel>
        <VegaTabGroupPanel id={`nav-contact`} className={`v-py-size-24`}>
          <div className={`v-font-p2-short v-text-primary`}>Contact tab</div>
        </VegaTabGroupPanel>
      </VegaTabGroup>
    </VegaFlex>
  );
};
export default App;
