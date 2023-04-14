<script>
import ComponentContent from './component-content.vue'
import ComponentSubContent from './component-sub-content.vue'

import Accordion from '../components/accordion/examples/accordion.vue'
import AccordionWithRightChevron from '../components/accordion/examples/accordion-with-right-chevron.vue'

import AppFooter from '../components/app-footer/examples/app-footer.vue'
import AppFooterWithAdditionalLinks from '../components/app-footer/examples/app-footer-with-additional-links.vue'

import Badge from '../components/badge/examples/badge.vue'

import Banner from '../components/banner/examples/banner.vue'
import BannerWithStickyHeader from '../components/banner/examples/banner-sticky-header.vue'
import bannerStickyHeaderIframe from '../components/banner/examples/banner-sticky-header-iframe.vue'

import ButtonPrimary from '../components/button/examples/button.vue'
import ButtonWithIcon from '../components/button/examples/button-with-icon.vue'
import ButtonSecondary from '../components/button/examples/button-secondary-variant.vue'
import ButtonSmall from '../components/button/examples/button-small.vue'
import ButtonLarge from '../components/button/examples/button-large.vue'

export default {
  name: 'VegaComponents',
  props: {
    activeComponent: String
  },
  data() {
    return {}
  },
  components: {
    ComponentContent,
    ComponentSubContent,
    Accordion,
    AccordionWithRightChevron,
    AppFooter,
    AppFooterWithAdditionalLinks,
    Badge,
    Banner,
    BannerWithStickyHeader,
    bannerStickyHeaderIframe,
    ButtonPrimary,
    ButtonWithIcon,
    ButtonSecondary,
    ButtonSmall,
    ButtonLarge
  },
  methods: {},
  mounted() {},
  updated() {}
}
</script>

<template>
  <main>
    <div v-if="activeComponent == 'accordion'">
      <ComponentContent title="Accordion">
        <ComponentSubContent subTitle="Example with chevron on left" :background="true">
          <Accordion />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example with chevron on right" :background="true">
          <AccordionWithRightChevron />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'app-footer'">
      <ComponentContent title="App Footer">
        <ComponentSubContent subTitle="Standard App Footer" :background="true">
          <AppFooter />
        </ComponentSubContent>
        <ComponentSubContent subTitle="App Footer with Additional Links" :background="true">
          <AppFooterWithAdditionalLinks />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'badge'">
      <ComponentContent title="Badge">
        <ComponentSubContent subTitle="Example" :background="true">
          <Badge />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'banner'">
      <ComponentContent title="Banner">
        <ComponentSubContent subTitle="Example" :background="true">
          <Banner />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example of sticky header mode" :background="true">
          <bannerStickyHeaderIframe />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'banner-with-sticky-header-iframe'">
      <BannerWithStickyHeader />
    </div>
    <div v-if="activeComponent == 'button'">
      <ComponentContent title="Button">
        <ComponentSubContent subTitle="Primary variant" :background="true">
          <ButtonPrimary />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Primary variant with icon" :background="true">
          <ButtonWithIcon />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Secondary Variant" :background="true">
          <ButtonSecondary />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Small Button" :background="true">
          <ButtonSmall />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Large Button" :background="true">
          <ButtonLarge />
        </ComponentSubContent>
      </ComponentContent>
    </div>
  </main>
</template>
