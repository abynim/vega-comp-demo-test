<script>
import { VegaImageUploader } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaImageUploader },
  methods: {
    async onChange(evt) {
      if (evt.detail) {
        this.$refs.uploader.$el.status = "uploading"
        setTimeout(() => {
          this.$refs.uploader.$el.status = "done"
        }, 3000)
      }
    }
  }
}
</script>
<template>
  <VegaImageUploader
    ref="uploader"
    @vegachange="onChange"
  />
</template>
