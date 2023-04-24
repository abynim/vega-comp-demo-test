<script>
import { VegaInputSelect } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaInputSelect }
}
</script>
<template>
  <VegaInputSelect
    :required="false"
    size="small"
    placeholder="placeholder text"
    :max-height="400"
    :auto-validation="true"
    :source="[
      { id: 'id1', displayName: 'name1' },
      { id: 'id2', displayName: 'name2' },
      { id: 'id3', displayName: 'name3' },
      { id: 'id4', displayName: 'name4' }
    ]"
  />
</template>
