import { VegaTabGroup } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaTabGroup
      gap={`size-8`}
      showCloseButton={true}
      tabItems={[
        { label: "Home", dataTarget: "nav-home", prefixIcon: "home" },
        { label: "Profile", dataTarget: "nav-profile" },
        { label: "Contact", dataTarget: "nav-contact" },
      ]}
      selectedTabDataTarget={`nav-profile`}
    >
      <VegaTabGroupPanel id="nav-home">
        <div className={`v-py-size-24 v-font-p2-short v-text-primary`}>
          This is the Home tab VegaTabGroupPanel
        </div>
      </VegaTabGroupPanel>
      <VegaTabGroupPanel id="nav-profile">
        <div className={`v-py-size-24 v-font-p2-short v-text-primary`}>
          Profile tab
        </div>
      </VegaTabGroupPanel>
      <VegaTabGroupPanel id="nav-contact">
        <div className={`v-py-size-24 v-font-p2-short v-text-primary`}>
          Contact tab
        </div>
      </VegaTabGroupPanel>
    </VegaTabGroup>
  );
};
export default App;
