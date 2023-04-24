<script>
import { VegaGrid } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaGrid }
}
</script>
<template>
  <VegaGrid
    :column="2"
    gap="size-16"
  >
    <div
      class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
      :style="{ gridColumn: `1 /  span 2` }"
    >
      Child Item 1
    </div>
    <div
      class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
      :style="{ gridRow: `span 2` }"
    >
      Child Item 2
    </div>
    <div class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8">Child Item 3</div>
    <div
      class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
      :style="{ gridColumn: 2 }"
    >
      Child Item 4
    </div>
    <div
      class="v-bg-action v-font-p2-short v-text-inverted-primary v-p-size-8"
      :style="{ gridColumn: `1 /  span 2` }"
    >
      Child Item 5
    </div>
  </VegaGrid>
</template>
