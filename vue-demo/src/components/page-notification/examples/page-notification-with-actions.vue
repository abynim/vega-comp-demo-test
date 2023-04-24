<script>
import { VegaFlex, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaFlex, VegaButton },
  methods: {
    async openNotifyWithAction() {
      const id = await window.VegaNotify.open({
        title: "Title",
        duration: 0,
        message: "This notification will not be closed, because the duration is set 0",
        actionButtons: [
          {
            label: "Confirm",
            onVegaClick: () => {
              window.VegaNotify.close(id)
            }
          }
        ]
      })
    },

    async openNotifyWithActions() {
      const id = await window.VegaNotify.open({
        title: "Title",
        duration: 10000,
        message: `This notification will close after 10s`,
        actionButtons: [
          {
            label: "Cancel",
            onVegaClick: () => {
              window.VegaNotify.close(id)
            }
          },
          {
            label: "OK",
            onVegaClick: () => {
              window.VegaNotify.close(id)
            }
          }
        ]
      })
    }
  }
}
</script>
<template>
  <VegaFlex gap="size-16">
    <VegaButton @vegaclick="openNotifyWithAction">With action</VegaButton>
    <VegaButton
      variant="secondary"
      @vegaclick="openNotifyWithActions"
    >
      With actions
    </VegaButton>
  </VegaFlex>
</template>
