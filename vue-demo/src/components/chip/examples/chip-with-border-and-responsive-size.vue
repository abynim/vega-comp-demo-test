<script>
import { VegaChip } from '@heartlandone/vega-vue'

export default {
  data() {
    return {}
  },
  components: { VegaChip }
}
</script>
<template>
  <VegaChip
    text="Chip"
    variant="outlined"
    :size="{ default: 'extra-small', S: 'small', M: 'default', L: 'large' }"
  />
</template>
