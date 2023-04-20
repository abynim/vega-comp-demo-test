<script>
import { VegaAppFooter } from '@heartlandone/vega-vue'

export default {
  data() {
    return {}
  },
  components: { VegaAppFooter }
}
</script>
<template>
  <VegaAppFooter
    ref="footer"
    term-of-use-label="Terms of use"
    privacy-policy-label="Privacy Policy"
    :additional-links="[
      {
        label: 'Another Link',
        URL: 'https://google.com'
      }
    ]"
  />
</template>
