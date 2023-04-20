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
    size="small"
    icon="close"
    label="This is a danger button"
    danger="true"
    @vegaclick="onClick"
  />
</template>
