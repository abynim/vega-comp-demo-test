<script>
import { VegaModal, VegaFlex, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      isOpen: false
    }
  },
  components: { VegaModal, VegaFlex, VegaButton },
  methods: {
    openModal() {
      this.isOpen = true
    },
    closeModal() {
      this.isOpen = false
    }
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaModal
      :size="400"
      backdrop="static"
      :open="isOpen"
      @vegaclose="closeModal"
    >
      <p class="v-font-p2-short v-text-primary v-mb-size-24">
        This content will appear in the modal.
      </p>

      <div>
        <VegaButton @vegaclick="closeModal">Close</VegaButton>
      </div>
    </VegaModal>
    <VegaButton @vegaclick="openModal">Launch modal</VegaButton>
  </VegaFlex>
</template>
