<script>
import { VegaForm, VegaInput, VegaFlex, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaForm, VegaInput, VegaFlex, VegaButton },
  methods: {
    async getValue() {
      window.alert(JSON.stringify(await this.$refs.vegaForm.$el.getValue(), null, 2))
    },

    validate() {
      this.$refs.vegaForm.$el.valid()
    },

    reset() {
      this.$refs.vegaForm.$el.reset()
    }
  }
}
</script>
<template>
  <VegaForm
    data-vega-form="form"
    ref="vegaForm"
  >
    <VegaFlex
      direction="col"
      class="v-mb-size-12"
    >
      <VegaInput
        data-vega-form="input"
        :min="6"
        :value="3"
        label="Min value is 6"
      ></VegaInput>

      <VegaForm data-vega-form="nestedForm">
        <VegaInput
          data-vega-form="nestedInput"
          :max="12"
          :value="15"
          label="This is a nested form input"
        ></VegaInput>
      </VegaForm>
    </VegaFlex>
    <VegaFlex
      direction="row"
      gap="size-24"
    >
      <VegaButton @vegaclick="getValue">Get Value</VegaButton>
      <VegaButton @vegaclick="validate">Validate</VegaButton>
      <VegaButton @vegaclick="reset">Reset</VegaButton>
    </VegaFlex>
  </VegaForm>
</template>
