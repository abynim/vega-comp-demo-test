<script>
import { VegaCard } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaCard }
}
</script>
<template>
  <VegaCard
    padding="size-24"
    margin="size-8"
    variant="shadow"
    background-color="bg-primary"
  >
    <div className="v-font-p2-short v-text-primary">Content for the card goes here.</div>
  </VegaCard>
</template>
