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
      class="v-bg-action v-font-p2-short v-text-inverted-primary v-w-size-40 v-bg-action vega-flex-shrink-0"
    >
      Child Item 1
    </div>
    <div>
      <VegaFlex gap="size-8">
        <div class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8">
          Child Item 2
        </div>
        <div class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8">
          Child Item 3
        </div>
        <div class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8">
          Child Item 4
        </div>
      </VegaFlex>
    </div>
  </VegaFlex>
</template>
