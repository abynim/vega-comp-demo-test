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

import ButtonCircle from '../components/button-circle/examples/button-circle.vue'
import ButtonCircleWithSearchIcon from '../components/button-circle/examples/button-circle-with-search-icon.vue'
import ButtonCircleDanger from '../components/button-circle/examples/button-circle-danger.vue'

import ButtonLink from '../components/button-link/examples/button-link.vue'
import ButtonLinkWithIcon from '../components/button-link/examples/button-link-with-icon.vue'
import ButtonLinkDanger from '../components/button-link/examples/button-link-danger.vue'

import Carousel from '../components/carousel/examples/carousel.vue'
import CarouselWithButtonControls from '../components/carousel/examples/carousel-with-button-controls.vue'

import Checkbox from '../components/checkbox/examples/single-checkbox.vue'
import CheckboxGroup from '../components/checkbox/examples/checkbox-group.vue'

import Chip from '../components/chip/examples/chip.vue'
import ChipWithBorderAndResponsiveSize from '../components/chip/examples/chip-with-border-and-responsive-size.vue'
import ChipStatus from '../components/chip/examples/chip-status.vue'

import ColorPicker from '../components/color-picker/examples/color-picker.vue'
import ColorPickerWithColorArray from '../components/color-picker/examples/color-picker-with-color-array.vue'

import ComboBox from '../components/combo-box/examples/combo-box.vue'
import ComboBoxWithCreatableOptions from '../components/combo-box/examples/combo-box-with-creatable-options.vue'

import CounterBadge from '../components/counter-badge/examples/counter-badge.vue'
import CounterBadgeWithDot from '../components/counter-badge/examples/counter-badge-with-dot.vue'

import DatePicker from '../components/date-picker/examples/date-picker.vue'
import DatePickerWithRange from '../components/date-picker/examples/date-picker-with-range.vue'
import DatePickerWithRangeWithMinMaxDate from '../components/date-picker/examples/date-picker-with-range-with-min-max-date.vue'

import Dropdown from '../components/dropdown/examples/dropdown.vue'
import DropdownWithDynamicSearchableMenu from '../components/dropdown/examples/dropdown-with-dynamic-searchable-menu.vue'

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
    ButtonLarge,
    ButtonCircle,
    ButtonCircleWithSearchIcon,
    ButtonCircleDanger,
    ButtonLink,
    ButtonLinkWithIcon,
    ButtonLinkDanger,
    Carousel,
    CarouselWithButtonControls,
    Checkbox,
    CheckboxGroup,
    Chip,
    ChipWithBorderAndResponsiveSize,
    ChipStatus,
    ColorPicker,
    ColorPickerWithColorArray,
    ComboBox,
    ComboBoxWithCreatableOptions,
    CounterBadge,
    CounterBadgeWithDot,
    DatePicker,
    DatePickerWithRange,
    DatePickerWithRangeWithMinMaxDate,
    Dropdown,
    DropdownWithDynamicSearchableMenu
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
    <div v-if="activeComponent == 'button-circle'">
      <ComponentContent title="Button Circle">
        <ComponentSubContent subTitle="Example" :background="true">
          <ButtonCircle />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Search Button" :background="true">
          <ButtonCircleWithSearchIcon />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Search Button" :background="true">
          <ButtonCircleDanger />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'button-link'">
      <ComponentContent title="Button Link">
        <ComponentSubContent subTitle="Basic Link" :background="true">
          <ButtonLink />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Link with icon" :background="true">
          <ButtonLinkWithIcon />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Danger" :background="true">
          <ButtonLinkDanger />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'carousel'">
      <ComponentContent title="Carousel">
        <ComponentSubContent subTitle="Example" :background="true">
          <Carousel />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example with button controls" :background="true">
          <CarouselWithButtonControls />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'checkbox'">
      <ComponentContent title="Checkbox">
        <ComponentSubContent subTitle="Single Checkbox" :background="true">
          <Checkbox />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Checkbox Group" :background="true">
          <CheckboxGroup />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'chip'">
      <ComponentContent title="Chip">
        <ComponentSubContent subTitle="Example" :background="true">
          <Chip />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example with Border and Responsive Size" :background="true">
          <ChipWithBorderAndResponsiveSize />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Status Example" :background="true">
          <ChipStatus />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'color-picker'">
      <ComponentContent title="Color Picker">
        <ComponentSubContent subTitle="Example" :background="true">
          <ColorPicker />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example with new color array" :background="true">
          <ColorPickerWithColorArray />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'combo-box'">
      <ComponentContent title="Combo Box">
        <ComponentSubContent subTitle="Example" :background="true">
          <ComboBox />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example with createable options" :background="true">
          <ComboBoxWithCreatableOptions />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'counter-badge'">
      <ComponentContent title="Counter Badge">
        <ComponentSubContent subTitle="Example" :background="true">
          <CounterBadge />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example using Dot" :background="true">
          <CounterBadgeWithDot />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'date-picker'">
      <ComponentContent title="Date Picker">
        <ComponentSubContent subTitle="Example" :background="true">
          <DatePicker />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Range Example" :background="true">
          <DatePickerWithRange />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Range with Min and Max Date" :background="true">
          <DatePickerWithRangeWithMinMaxDate />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'dropdown'">
      <ComponentContent title="Dropdown Menu">
        <ComponentSubContent subTitle="Example with linkable menu" :background="true">
          <Dropdown />
        </ComponentSubContent>
        <ComponentSubContent subTitle="Example with dynamic searchable menu" :background="true">
          <DropdownWithDynamicSearchableMenu />
        </ComponentSubContent>
      </ComponentContent>
    </div>
  </main>
</template>
