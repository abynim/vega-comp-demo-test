<script>
import { VegaToggleSwitch } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaToggleSwitch }
}
</script>
<template>
  <VegaToggleSwitch
    size="default"
    label="Label"
    :disabled="false"
  />
</template>
