<script>
import { VegaCounterBadge, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaCounterBadge, VegaButton }
}
</script>
<template>
  <VegaCounterBadge
    color="bg-danger"
    :dot="true"
    :count="9"
  >
    <VegaButton>Button Example</VegaButton>
  </VegaCounterBadge>
</template>
