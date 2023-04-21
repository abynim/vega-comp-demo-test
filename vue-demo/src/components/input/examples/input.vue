<script>
import { VegaInput } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaInput }
}
</script>
<template>
  <VegaInput
    name="phone"
    label="Phone number"
    value="(555) 555-5555"
    autocomplete="off"
    prefix-icon="mobile-phone"
    :required="true"
    :max-length="14"
    :auto-validation="true"
    :mask-config="{ type: 'phone' }"
    hint="Enter your telephone number"
    :show-clear-icon="true"
  />
</template>
