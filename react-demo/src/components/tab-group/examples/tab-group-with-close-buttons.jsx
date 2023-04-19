import {
  VegaTabGroup,
  VegaTabGroupPanel,
  VegaFlex,
} from "@heartlandone/vega-react";

const App = () => {
  const onTabClick = (e) => {
    console.log(e.detail);
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
