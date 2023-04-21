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
    label="Min & Max Date Range"
    mode="range"
    max-date="05/20/2022"
    min-date="05/10/2022"
  />
</template>
