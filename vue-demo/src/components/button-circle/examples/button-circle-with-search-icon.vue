<script>
import { VegaButtonCircle } from "@heartlandone/vega-vue"
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
    icon="search"
    label="This is the label"
    @vegaclick="onClick"
  />
</template>
