<script>
import { VegaCheckbox, VegaCheckboxGroup } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaCheckbox, VegaCheckboxGroup }
}
</script>
<template>
  <VegaCheckboxGroup
    :vega-flex-prop="{ gap: 'size-12', direction: 'col' }"
    :value="['apple', 'banana']"
  >
    <VegaCheckbox
      identifier="apple"
      size="small"
    >
      Apple
    </VegaCheckbox>
    <VegaCheckbox
      identifier="banana"
      size="small"
    >
      Banana
    </VegaCheckbox>
    <VegaCheckbox
      identifier="orange"
      size="small"
    >
      Orange
    </VegaCheckbox>
  </VegaCheckboxGroup>
</template>
