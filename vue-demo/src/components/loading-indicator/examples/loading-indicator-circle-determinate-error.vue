<script>
import { VegaLoadingIndicator, VegaFlex, VegaIcon } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      percentage: 0
    }
  },
  components: { VegaLoadingIndicator, VegaFlex, VegaIcon },
  methods: {
    simulatePercentage() {
      const errorLoaderElement = this.$refs.errorLoader.$el
      errorLoaderElement.percent = 0
      this.percentage = 0
      const errorLoaderTimer = setInterval(() => {
        if (errorLoaderElement.percent < 80) {
          errorLoaderElement.percent += 1
          errorLoaderElement.label = `${errorLoaderElement.percent}%`
          errorLoaderElement.hint = null
        } else {
          errorLoaderElement.status = `error`
          errorLoaderElement.label = `Error`
          errorLoaderElement.hint = `${errorLoaderElement.percent}%`
          clearInterval(errorLoaderTimer)
        }
      }, 30)
    }
  },
  mounted() {
    this.simulatePercentage()
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaLoadingIndicator
      ref="errorLoader"
      mode="determinate"
      :percent="percentage"
      size="large"
    />
    <VegaFlex gap="size-12">
      <VegaIcon
        icon="far fa-rotate-right"
        @click="simulatePercentage"
      />
      <span
        @click="simulatePercentage"
        class="v-text-primary"
        >Refresh</span
      >
    </VegaFlex>
  </VegaFlex>
</template>
