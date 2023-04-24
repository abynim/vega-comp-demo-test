<script>
import { VegaStepper } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaStepper }
}
</script>
<template>
  <VegaStepper
    :value="1"
    :max="5"
    :min="0"
    label="Quantity"
    buttonVariant="primary"
  />
</template>
