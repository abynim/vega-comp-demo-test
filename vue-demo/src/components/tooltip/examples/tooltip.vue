<script>
import { VegaTooltip, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaTooltip, VegaButton }
}
</script>
<template>
  <VegaTooltip
    :size="100"
    content="This is a tooltip"
    trigger="hover"
    placement="top"
  >
    <VegaButton>Hover Me</VegaButton>
  </VegaTooltip>
</template>
