<script>
import { VegaTabGroup, VegaTabGroupPanel, VegaFlex } from "@heartlandone/vega-vue"

export default {
  data() {
    return {}
  },
  components: { VegaTabGroup, VegaTabGroupPanel, VegaFlex },
  methods: {
    onTabClick(e) {
      console.log(e.detail)
    }
  }
}
</script>
<template>
  <VegaFlex direction="col">
    <VegaTabGroup
      gap="size-8"
      :show-close-button="false"
      :tab-items="[
        { label: 'Home', dataTarget: 'nav-home', prefixIcon: 'home' },
        { label: 'Profile', dataTarget: 'nav-profile' },
        { label: 'Contact', dataTarget: 'nav-contact' }
      ]"
      @vegaclick="onTabClick"
    >
      <VegaTabGroupPanel
        id="nav-home"
        class="v-py-size-24"
      >
        <div class="v-font-p2-short v-text-primary">This is the Home tab</div>
      </VegaTabGroupPanel>

      <VegaTabGroupPanel
        id="nav-profile"
        class="v-py-size-24"
      >
        <div class="v-font-p2-short v-text-primary">Profile tab</div>
      </VegaTabGroupPanel>

      <VegaTabGroupPanel
        id="nav-contact"
        class="v-py-size-24"
      >
        <div class="v-font-p2-short v-text-primary">Contact tab</div>
      </VegaTabGroupPanel>
    </VegaTabGroup>
  </VegaFlex>
</template>
