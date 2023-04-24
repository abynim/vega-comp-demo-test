<script>
import { VegaPagination } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaPagination }
}
</script>
<template>
  <VegaPagination
    :current="1"
    :page-size="10"
    :total="100"
  />
</template>
