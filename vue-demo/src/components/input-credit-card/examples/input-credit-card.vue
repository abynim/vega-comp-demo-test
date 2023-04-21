<script>
import { VegaForm, VegaInputCreditCard } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaForm, VegaInputCreditCard }
}
</script>
<template>
  <VegaForm>
    <VegaInputCreditCard
      class="v-mb-size-12"
      :hide-card-number-on-blur="true"
      value="4111 1111 1111 1111"
    />
    <VegaInputCreditCard
      class="v-mb-size-12"
      value="5555 5555 5555 4444"
    />
    <VegaInputCreditCard
      class="v-mb-size-12"
      value="6011 1111 1111 1117"
    />
    <VegaInputCreditCard
      class="v-mb-size-12"
      value="3782 822463 10006"
    />
  </VegaForm>
</template>
