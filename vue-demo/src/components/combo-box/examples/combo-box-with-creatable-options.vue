<script>
import { VegaComboBox } from '@heartlandone/vega-vue'

export default {
  data() {
    return {}
  },
  components: { VegaComboBox },
  methods: {
    onCreate(evt) {
      this.$refs.comboBox.$el.source.push({ key: evt.detail, label: evt.detail })
      this.$refs.comboBox.$el.value = [...this.$refs.comboBox.$el.value, evt.detail]
    }
  }
}
</script>
<template>
  <VegaComboBox
    ref="comboBox"
    label="label text"
    :required="true"
    :source="[
      { key: 'key1', label: 'option 1' },
      { key: 'key2', label: 'option 2' },
      { key: 'key3', label: 'option 3' }
    ]"
    :vega-dropdown-props="{ dynamicOption: true }"
    @vegacreate="onCreate"
  />
</template>
