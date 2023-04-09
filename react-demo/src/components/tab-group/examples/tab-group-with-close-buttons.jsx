import { useState } from "react";
import { VegaTabGroup, VegaFlex } from "@heartlandone/vega-react";

const App = () => {
  const [activeTab, setActiveTab] = useState("nav-home");
  const onTabClick = (e) => {
    setActiveTab(e.detail);
  };
  return (
    <VegaFlex direction={`col`}>
      <VegaTabGroup
        gap={`size-8`}
        showCloseButton={true}
        tabItems={[
          { label: "Home", dataTarget: "nav-home", prefixIcon: "home" },
          { label: "Profile", dataTarget: "nav-profile" },
          { label: "Contact", dataTarget: "nav-contact" },
        ]}
        onVegaClick={onTabClick}
      />
      <div className={`v-py-size-24`}>
        {activeTab === "nav-home" && (
          <div className={`v-font-p2-short v-text-primary`}>
            This is the Home tab
          </div>
        )}
        {activeTab === "nav-profile" && (
          <div className={`v-font-p2-short v-text-primary`}>Profile tab</div>
        )}
        {activeTab === "nav-contact" && (
          <div className={`v-font-p2-short v-text-primary`}>Contact tab</div>
        )}
      </div>
    </VegaFlex>
  );
};
export default App;
