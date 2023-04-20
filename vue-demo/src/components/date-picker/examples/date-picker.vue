<script>
import { VegaDatePicker } from '@heartlandone/vega-vue'
export default {
  data() {
    return {}
  },
  components: { VegaDatePicker }
}
</script>
<template>
  <VegaDatePicker
    label="Single mode"
    mode="single"
    size="small"
    format="MM/DD/YYYY"
    :clear-button="true"
  />
</template>
