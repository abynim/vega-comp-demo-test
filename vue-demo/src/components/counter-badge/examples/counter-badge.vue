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
    :offset="[5, 0]"
    color="bg-danger"
    :dot="false"
    :count="9"
  >
    <VegaButton>Button Example</VegaButton>
  </VegaCounterBadge>
</template>
