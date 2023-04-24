<script>
import { VegaRadioGroup, VegaRadio } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaRadioGroup, VegaRadio },
  mounted() {}
}
</script>
<template>
  <VegaRadioGroup
    :vega-flex-prop="{
      gap: 'size-8',
      direction: 'col',
      breakpoint: 'None',
      alignItem: 'start',
      justifyContent: 'start',
      margin: 0
    }"
    ref="radioGroup"
    name="fruit"
    value="apple"
    label="Select a fruit"
  >
    <VegaRadio value="apple">Apple</VegaRadio>
    <VegaRadio value="orange">Orange</VegaRadio>
  </VegaRadioGroup>
</template>
