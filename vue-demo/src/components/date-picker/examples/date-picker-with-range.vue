<script>
import { VegaDatePicker } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaDatePicker }
}
</script>
<template>
  <VegaDatePicker
    label="Range mode"
    mode="range"
    size="small"
    format="MM/DD/YYYY"
    :clear-button="true"
    :allow-repick="true"
  />
</template>
