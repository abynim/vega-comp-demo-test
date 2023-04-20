<script>
import { VegaDropdown, VegaButton } from '@heartlandone/vega-vue'

export default {
  data() {
    return {
      sourceMap: {
        google: {
          label: 'Google',
          key: 'google',
          url: 'https://google.com',
          group: 'links'
        },
        vega: {
          label: 'Vega',
          key: 'vega',
          url: 'https://vega.hlprd.com/',
          group: 'links'
        },
        option3: { label: 'Option3', key: 'option3', url: '#', group: 'options' }
      }
    }
  },
  components: { VegaDropdown, VegaButton },
  methods: {
    onLinkClick(evt) {
      window.open(this.sourceMap[evt.detail].url, '_blank')
    }
  }
}
</script>
<template>
  <VegaDropdown :source="Object.values(sourceMap)" @vegadropdownclick="onLinkClick">
    <VegaButton icon="hb-menu">Menu</VegaButton>
  </VegaDropdown>
</template>
