import { useEffect, useRef } from "react";
import {
  VegaCarousel,
  VegaCard,
  VegaFlex,
  VegaButtonCircle,
} from "@heartlandone/vega-react";

export default function App() {
  const carousel = useRef();

  const goToPreviousPage = () => {
    carousel.current.prevPage();
  };
  const goToNextPage = () => {
    carousel.current.nextPage();
  };

  return (
    <VegaFlex direction={`col`}>
      <VegaFlex gap={`size-16`}>
        <VegaButtonCircle
          variant={`secondary`}
          size={`default`}
          icon={`arrow-left`}
          onVegaClick={goToPreviousPage}
        />
        <VegaButtonCircle
          variant={`secondary`}
          size={`default`}
          icon={`arrow-right`}
          onVegaClick={goToNextPage}
        />
      </VegaFlex>
      <VegaCarousel
        ref={carousel}
        perPage={1}
        spacing={`size-32`}
        showSlider={true}
      >
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
    </VegaFlex>
  );
}
