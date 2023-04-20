<script>
import { VegaButtonCircle } from '@heartlandone/vega-vue'
export default {
  data() {
    return {}
  },
  components: { VegaButtonCircle },
  methods: {
    onClick() {}
  }
}
</script>

<template>
  <VegaButtonCircle
    variant="primary"
    size="large"
    icon="hb-menu"
    label="This labels the button"
    @vegaclick="onClick"
  />
</template>
