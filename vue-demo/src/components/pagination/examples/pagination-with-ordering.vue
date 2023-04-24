<script>
import { VegaPagination } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaPagination },
  mounted() {
    this.$refs.recordsPagination.$el.extensions = [["pageSizeSelector"], ["pageSelector"], ["goTo"]]
  }
}
</script>
<template>
  <VegaPagination
    ref="recordsPagination"
    :current="1"
    :page-size="10"
    :total="100"
  />
</template>
