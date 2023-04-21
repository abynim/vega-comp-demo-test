<script>
import { VegaChip } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaChip },
  methods: {
    closeChip() {
      this.$refs.chip.$el.remove()
    }
  }
}
</script>
<template>
  <VegaChip
    ref="chip"
    text="Chip"
    :clickable="true"
    :show-close-icon="true"
    @vegaclick="null"
    @vegaclose="closeChip"
  />
</template>
