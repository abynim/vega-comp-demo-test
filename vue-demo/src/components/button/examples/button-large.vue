<script>
import { VegaButton } from '@heartlandone/vega-vue'

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
  <VegaButton variant="primary" :disabled="false" @vegaclick="onClick" size="large">
    Checkout
  </VegaButton>
</template>
