<script>
import { VegaCarousel, VegaCard, VegaFlex, VegaButtonCircle } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaCarousel, VegaCard, VegaFlex, VegaButtonCircle },
  methods: {
    goToNextPage() {
      this.$refs.carousel.$el.nextPage()
    },
    goToPreviousPage() {
      this.$refs.carousel.$el.prevPage()
    }
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaFlex gap="size-16">
      <VegaButtonCircle
        variant="secondary"
        size="default"
        icon="arrow-left"
        @vegaclick="goToPreviousPage"
      />
      <VegaButtonCircle
        variant="secondary"
        size="default"
        icon="arrow-right"
        @vegaclick="goToNextPage"
      />
    </VegaFlex>
    <VegaCarousel
      ref="carousel"
      per-page="1"
      spacing="size-32"
      show-slider="true"
    >
      <VegaCard
        shadow="shadow-card"
        background-color="bg-primary"
        padding="size-24"
      >
        <div class="v-text-primary v-font-p2-short">First page</div>
      </VegaCard>
      <VegaCard
        shadow="{`shadow-card`}"
        background-color="bg-primary"
        padding="size-24"
      >
        <div class="v-text-primary v-font-p2-short">Second page</div>
      </VegaCard>
      <VegaCard
        shadow="{`shadow-card`}"
        background-color="bg-primary"
        padding="size-24"
      >
        <div class="v-text-primary v-font-p2-short">Third page</div>
      </VegaCard>
    </VegaCarousel>
  </VegaFlex>
</template>
