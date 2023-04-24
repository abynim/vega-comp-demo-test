<script>
import { VegaPopover, VegaFlex, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaPopover, VegaFlex, VegaButton }
}
</script>
<template>
  <VegaFlex
    id="container"
    direction="col"
  >
    <VegaPopover
      :size="200"
      placement="left"
      alignment="start"
      positionRelativeTo="#container"
    >
      <VegaButton slot="popover-content">Click Me</VegaButton>
      <div
        slot="popover"
        className="v-font-p2-short v-text-primary"
      >
        I am a popover
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </VegaPopover>
  </VegaFlex>
</template>
