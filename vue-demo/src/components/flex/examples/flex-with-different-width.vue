<script>
import { VegaFlex } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaFlex }
}
</script>
<template>
  <VegaFlex gap="size-8">
    <div
      class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8 v-w-size-40 v-min-w-min vega-flex-shrink-0"
    >
      Child Item 1
    </div>
    <div class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8 v-p-size-8">
      Child Item 2
    </div>
    <div class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8 v-p-size-8">
      Child Item 3
    </div>
  </VegaFlex>
</template>
