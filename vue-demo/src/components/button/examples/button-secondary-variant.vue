<script>
import { VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaButton },
  methods: {
    onClick() {}
  }
}
</script>

<template>
  <VegaButton
    variant="secondary"
    :disabled="false"
    @vegaclick="onClick"
  >
    Checkout
  </VegaButton>
</template>
