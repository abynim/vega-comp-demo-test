<script>
import { VegaProgressTracker } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaProgressTracker },
  mounted() {
    this.$refs.progressTracker.$el.steps = [
      "Basic Information",
      "Contact Information",
      "Emergency Contact",
      "W-2 Forms"
    ]
  }
}
</script>
<template>
  <VegaProgressTracker
    ref="progressTracker"
    direction="vertical"
    :current="1"
  />
</template>
