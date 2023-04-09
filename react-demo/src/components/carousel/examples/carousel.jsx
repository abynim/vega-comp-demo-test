import { VegaCarousel, VegaCard } from "@heartlandone/vega-react";

const App = () => {
  return (
    <VegaCarousel perPage={1} spacing={`size-32`} showSlider={true}>
      <VegaCard
        shadow={`shadow-card`}
        backgroundColor={`bg-primary`}
        padding={`size-24`}
      >
        <div className={`v-text-primary v-font-p2-short`}>First page</div>
      </VegaCard>
      <VegaCard
        shadow={`shadow-card`}
        backgroundColor={`bg-primary`}
        padding={`size-24`}
      >
        <div className={`v-text-primary v-font-p2-short`}>Second page</div>
      </VegaCard>
      <VegaCard
        shadow={`shadow-card`}
        backgroundColor={`bg-primary`}
        padding={`size-24`}
      >
        <div className={`v-text-primary v-font-p2-short`}>Third page</div>
      </VegaCard>
    </VegaCarousel>
  );
};
export default App;
