<script>
import { VegaFlex, VegaButton } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaFlex, VegaButton },
  methods: {
    openNotifyWithTitle() {
      window.VegaNotify.open({
        title: "Title",
        message:
          "This is the content of notification. This is the content of notification.This is the content of notification.This is the content of notification."
      })
    },
    openNotifyWithoutTitle() {
      window.VegaNotify.open({
        message: "No title notification"
      })
    }
  }
}
</script>
<template>
  <VegaFlex gap="size-16">
    <VegaButton @vegaclick="openNotifyWithTitle">With title</VegaButton>
    <VegaButton
      variant="secondary"
      @vegaclick="openNotifyWithoutTitle"
    >
      No title
    </VegaButton>
  </VegaFlex>
</template>
