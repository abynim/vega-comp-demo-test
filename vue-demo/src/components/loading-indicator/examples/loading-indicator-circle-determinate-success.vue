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
      const successLoaderElement = this.$refs.successLoader.$el
      successLoaderElement.percent = 0
      this.percentage = 0
      const successLoaderTimer = setInterval(() => {
        if (successLoaderElement.percent < 100) {
          successLoaderElement.percent += 1
          successLoaderElement.label = `${successLoaderElement.percent}%`
        } else {
          successLoaderElement.status = "success"
          successLoaderElement.Label = "Success"
          clearInterval(successLoaderTimer)
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
      ref="successLoader"
      mode="determinate"
      :percent="percentage"
      size="large"
      :label="percentage + '%'"
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
