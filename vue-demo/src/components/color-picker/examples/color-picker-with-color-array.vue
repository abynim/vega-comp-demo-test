<script>
import { VegaColorPicker, VegaFlex } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      color: "#CCCCCC"
    }
  },
  components: { VegaColorPicker, VegaFlex },
  methods: {
    onColorPickerChange(evt) {
      this.color = evt.currentTarget.value
    }
  }
}
</script>

<template>
  <VegaFlex direction="col">
    <VegaColorPicker
      label="Choose a Color"
      :value="color"
      :auto-validation="true"
      hint="Select a color from the list"
      :colors="[
        '#FFFFFF',
        '#000000',
        '#FF0000',
        '#CCCCCC',
        '#0000FF',
        '#00FFCC',
        '#FF00FF',
        '#99CC00'
      ]"
      @vegachange="onColorPickerChange"
    />
    <div
      :style="{
        marginTop: '12px',
        borderRadius: '8px',
        width: '200px',
        height: '200px',
        backgroundColor: color
      }"
    />
  </VegaFlex>
</template>
