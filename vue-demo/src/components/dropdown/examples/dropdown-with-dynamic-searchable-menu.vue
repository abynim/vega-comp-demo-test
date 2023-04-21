<script>
import { VegaDropdown, VegaButton } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      sourceMap: {
        google: {
          label: "Google",
          key: "google",
          url: "https://google.com",
          group: "links"
        },
        vega: {
          label: "Vega",
          key: "vega",
          url: "https://vega.hlprd.com/",
          group: "links"
        },
        option3: { label: "Option3", key: "option3", url: "#", group: "options" }
      }
    }
  },
  components: { VegaDropdown, VegaButton },
  methods: {
    onCreate(evt) {
      this.$refs.dropdown.$el.source.push({ key: evt.detail, label: evt.detail })
      this.$refs.dropdown.$el.value = [...this.$refs.dropdown.$el.value, evt.detail]
    },
    onLinkClick(evt) {
      window.open(this.sourceMap[evt.detail].url, "_blank")
    }
  }
}
</script>
<template>
  <VegaDropdown
    :source="Object.values(sourceMap)"
    @Vegadropdownclick="onLinkClick"
    :searchable="true"
    :dynamic-option="true"
    @vegacreate="onCreate"
  >
    <VegaButton icon="hb-menu">Menu</VegaButton>
  </VegaDropdown>
</template>
