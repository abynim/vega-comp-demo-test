<script>
import { VegaLoadingIndicator } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaLoadingIndicator }
}
</script>
<template>
  <VegaLoadingIndicator
    mode="determinate"
    label="Loading Data 35%"
    hint="Please wait"
    :percent="35"
    size="large"
  />
</template>
