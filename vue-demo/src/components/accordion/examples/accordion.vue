<script>
import { VegaAccordion } from "@heartlandone/vega-vue"
export default {
  data() {
    return {}
  },
  components: { VegaAccordion }
}
</script>

<template>
  <vegaAccordion
    draws-background="false"
    accordion-title="Accordion Title"
    expand-icon-align="left"
    expand="false"
  >
    <!--eslint-disable-next-line vue/no-deprecated-slot-attribute-->
    <div slot="title">This is the title</div>
    <!--eslint-disable-next-line vue/no-deprecated-slot-attribute-->
    <div
      slot="content"
      class="v-font-p2-short v-text-primary"
    >
      Accordion content
    </div>
  </vegaAccordion>
</template>
