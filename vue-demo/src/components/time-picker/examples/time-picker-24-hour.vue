<script>
import { VegaTimePicker } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaTimePicker }
}
</script>
<template>
  <VegaTimePicker
    label="Pick a time"
    size="small"
    timeFormat="24-hour"
  />
</template>
