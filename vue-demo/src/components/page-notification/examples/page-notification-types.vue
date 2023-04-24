<script>
import { VegaFlex, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaFlex, VegaButton },
  methods: {
    openNotify(evt) {
      const button = evt.currentTarget
      const type = button.id
      window.VegaNotify.open({
        type: type,
        message: `${button.textContent.toUpperCase()}`
      })
    }
  }
}
</script>
<template>
  <VegaFlex
    gap="size-16"
    :direction="{ default: 'row', S: 'col', M: 'row' }"
  >
    <VegaButton
      id="warning"
      @vegaclick="openNotify"
      variant="secondary"
    >
      Warning
    </VegaButton>
    <VegaButton
      id="success"
      variant="secondary"
      @vegaclick="openNotify"
    >
      Success
    </VegaButton>
    <VegaButton
      id="error"
      variant="secondary"
      @vegaclick="openNotify"
    >
      Error
    </VegaButton>
    <VegaButton
      id="info"
      variant="secondary"
      @vegaclick="openNotify"
    >
      Info
    </VegaButton>
  </VegaFlex>
</template>
