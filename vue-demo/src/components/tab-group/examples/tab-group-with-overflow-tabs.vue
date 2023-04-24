<script>
import { VegaTabGroup, VegaTabGroupPanel, VegaFlex } from "@heartlandone/vega-vue"

export default {
  data() {
    return {
      activeTab: "nav-home"
    }
  },
  components: {
    VegaTabGroup,
    VegaTabGroupPanel,
    VegaFlex
  },
  methods: {
    onTabClick(e) {
      this.activeTab = e.detail
    }
  }
}
</script>

<template>
  <VegaFlex
    direction="col"
    class="example-container"
  >
    <VegaTabGroup
      gap="size-8"
      :show-close-button="true"
      :tab-items="[
        { label: 'Home', dataTarget: 'nav-home', prefixIcon: 'home' },
        { label: 'Profile', dataTarget: 'nav-profile' },
        { label: 'Contact', dataTarget: 'nav-contact' },
        { label: 'Contact2', dataTarget: 'nav-contact4' },
        { label: 'Contact3', dataTarget: 'nav-contact5' },
        { label: 'Contact4', dataTarget: 'nav-contact6' },
        { label: 'Contact5', dataTarget: 'nav-contact7' },
        { label: 'Contact6', dataTarget: 'nav-contact8' },
        { label: 'Contact7', dataTarget: 'nav-contact9' },
        { label: 'Contact8', dataTarget: 'nav-contact10' }
      ]"
      @vegaclick="onTabClick"
      class="v-w-full"
      position-relative-to=".example-container"
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
