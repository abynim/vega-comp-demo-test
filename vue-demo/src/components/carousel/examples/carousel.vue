<script>
import { VegaCarousel, VegaCard } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaCarousel, VegaCard }
}
</script>
<template>
  <VegaCarousel
    per-page="1"
    spacing="size-32"
    show-slider="true"
  >
    <div>
      <VegaCard
        shadow="shadow-card"
        background-color="bg-primary"
        padding="size-24"
      >
        <div class="v-text-primary v-font-p2-short">First page</div>
      </VegaCard>
    </div>
    <div>
      <VegaCard
        shadow="shadow-card"
        background-color="bg-primary"
        padding="size-24"
      >
        <div class="v-text-primary v-font-p2-short">Second page</div>
      </VegaCard>
    </div>
    <div>
      <VegaCard
        shadow="shadow-card"
        background-color="bg-primary"
        padding="size-24"
      >
        <div class="v-text-primary v-font-p2-short">Third page</div>
      </VegaCard>
    </div>
  </VegaCarousel>
</template>
