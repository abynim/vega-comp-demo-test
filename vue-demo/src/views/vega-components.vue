<script>
import ComponentContent from "./component-content.vue"
import ComponentSubContent from "./component-sub-content.vue"

import Accordion from "../components/accordion/examples/accordion.vue"
import AccordionWithRightChevron from "../components/accordion/examples/accordion-with-right-chevron.vue"

import AppFooter from "../components/app-footer/examples/app-footer.vue"
import AppFooterWithAdditionalLinks from "../components/app-footer/examples/app-footer-with-additional-links.vue"

import Badge from "../components/badge/examples/badge.vue"

import Banner from "../components/banner/examples/banner.vue"
import BannerWithStickyHeader from "../components/banner/examples/banner-sticky-header.vue"
import bannerStickyHeaderIframe from "../components/banner/examples/banner-sticky-header-iframe.vue"

import ButtonPrimary from "../components/button/examples/button.vue"
import ButtonWithIcon from "../components/button/examples/button-with-icon.vue"
import ButtonSecondary from "../components/button/examples/button-secondary-variant.vue"
import ButtonSmall from "../components/button/examples/button-small.vue"
import ButtonLarge from "../components/button/examples/button-large.vue"

import ButtonCircle from "../components/button-circle/examples/button-circle.vue"
import ButtonCircleWithSearchIcon from "../components/button-circle/examples/button-circle-with-search-icon.vue"
import ButtonCircleDanger from "../components/button-circle/examples/button-circle-danger.vue"

import ButtonLink from "../components/button-link/examples/button-link.vue"
import ButtonLinkWithIcon from "../components/button-link/examples/button-link-with-icon.vue"
import ButtonLinkDanger from "../components/button-link/examples/button-link-danger.vue"

import Carousel from "../components/carousel/examples/carousel.vue"
import CarouselWithButtonControls from "../components/carousel/examples/carousel-with-button-controls.vue"

import Checkbox from "../components/checkbox/examples/single-checkbox.vue"
import CheckboxGroup from "../components/checkbox/examples/checkbox-group.vue"

import Chip from "../components/chip/examples/chip.vue"
import ChipWithBorderAndResponsiveSize from "../components/chip/examples/chip-with-border-and-responsive-size.vue"
import ChipStatus from "../components/chip/examples/chip-status.vue"

import ColorPicker from "../components/color-picker/examples/color-picker.vue"
import ColorPickerWithColorArray from "../components/color-picker/examples/color-picker-with-color-array.vue"

import ComboBox from "../components/combo-box/examples/combo-box.vue"
import ComboBoxWithCreatableOptions from "../components/combo-box/examples/combo-box-with-creatable-options.vue"

import CounterBadge from "../components/counter-badge/examples/counter-badge.vue"
import CounterBadgeWithDot from "../components/counter-badge/examples/counter-badge-with-dot.vue"

import DatePicker from "../components/date-picker/examples/date-picker.vue"
import DatePickerWithRange from "../components/date-picker/examples/date-picker-with-range.vue"
import DatePickerWithRangeWithMinMaxDate from "../components/date-picker/examples/date-picker-with-range-with-min-max-date.vue"

import Dropdown from "../components/dropdown/examples/dropdown.vue"
import DropdownWithDynamicSearchableMenu from "../components/dropdown/examples/dropdown-with-dynamic-searchable-menu.vue"

import Icon from "../components/icon/examples/icon.vue"

import ImageUploader from "../components/image-uploader/examples/image-uploader.vue"

import InputField from "../components/input/examples/input.vue"

import InputCreditCard from "../components/input-credit-card/examples/input-credit-card.vue"

import ItemToggle from "../components/item-toggle/examples/item-toggle.vue"

import Modal from "../components/modal/examples/modal.vue"

import LoadingIndicator from "../components/loading-indicator/examples/loading-indicator.vue"
import LoadingIndicatorBar from "../components/loading-indicator/examples/loading-indicator-bar.vue"
import LoadingIndicatorCircleDeterminate from "../components/loading-indicator/examples/loading-indicator-circle-determinate.vue"
import LoadingIndicatorBarDeterminate from "../components/loading-indicator/examples/loading-indicator-bar-determinate.vue"
import LoadingIndicatorCircleDeterminateSuccess from "../components/loading-indicator/examples/loading-indicator-circle-determinate-success.vue"
import LoadingIndicatorCircleDeterminateError from "../components/loading-indicator/examples/loading-indicator-circle-determinate-error.vue"

import PageNotification from "../components/page-notification/examples/page-notification.vue"
import PageNotificationWithActions from "../components/page-notification/examples/page-notification-with-actions.vue"
import PageNotificationTypes from "../components/page-notification/examples/page-notification-types.vue"

import Pagination from "../components/pagination/examples/pagination.vue"
import PaginationWithNumberOfPagesViewed from "../components/pagination/examples/pagination-with-number-of-pages-viewed.vue"
import PaginationWithVariableItemNumberDisplay from "../components/pagination/examples/pagination-with-variable-item-number-display.vue"
import PaginationCombinedExample from "../components/pagination/examples/pagination-combined-example.vue"
import PaginationWithOrdering from "../components/pagination/examples/pagination-with-ordering.vue"

import ProgressTracker from "../components/progress-tracker/examples/progress-tracker.vue"
import ProgressTrackerHorizontal from "../components/progress-tracker/examples/progress-tracker-horizontal.vue"

import Popover from "../components/popover/examples/popover.vue"

import Radio from "../components/radio/examples/radio.vue"

import InputSelect from "../components/input-select/examples/input-select.vue"
import InputSelectSmall from "../components/input-select/examples/input-select-small.vue"

import Sidenav from "../components/sidenav/examples/sidenav.vue"

import Stepper from "../components/stepper/examples/stepper.vue"

import TabGroup from "../components/tab-group/examples/tab-group.vue"
import TabGroupWithCloseButtons from "../components/tab-group/examples/tab-group-with-close-buttons.vue"
import TabGroupWithOverflowTabs from "../components/tab-group/examples/tab-group-with-overflow-tabs.vue"

import TableBasic from "../components/table/examples/table.vue"
import TableWithCustomColumns from "../components/table/examples/table-custom-columns.vue"
import TableWithSelection from "../components/table/examples/table-with-selection.vue"
import TableWithSorting from "../components/table/examples/table-with-sorting.vue"
import TableWithExpandableRow from "../components/table/examples/table-with-expandable-row.vue"
import TableWithClickableRow from "../components/table/examples/table-with-clickable-row.vue"
import TableOverflowColumnsWithEllipsis from "../components/table/examples/table-overflow-columns-with-ellipsis.vue"
import TableWithPaginationAndDividers from "../components/table/examples/table-with-pagination-and-dividers.vue"
import TableDensityDefault from "../components/table/examples/table-density-default.vue"
import TableDensityCompact from "../components/table/examples/table-density-compact.vue"
import TableDensityRelaxed from "../components/table/examples/table-density-relaxed.vue"
import TableDensityResponsive from "../components/table/examples/table-density-responsive.vue"
import TableWithHorizontalPadding from "../components/table/examples/table-with-horizontal-padding.vue"
import TableEditable from "../components/table/examples/table-editable.vue"
import TableEditableComplex from "../components/table/examples/table-editable-complex.vue"

import TextareaBasic from "../components/textarea/examples/textarea.vue"

import TimePicker from "../components/time-picker/examples/time-picker.vue"
import TimePicker24Hour from "../components/time-picker/examples/time-picker-24-hour.vue"

import ToggleSwitch from "../components/toggle-switch/examples/toggle-switch.vue"

import Tooltip from "../components/tooltip/examples/tooltip.vue"

import Box from "../components/box/examples/box.vue"
import Card from "../components/card/examples/card.vue"

import Flex from "../components/flex/examples/flex.vue"
import FlexWithDifferentWidth from "../components/flex/examples/flex-with-different-width.vue"
import FlexCombination from "../components/flex/examples/flex-combination.vue"
import FlexAlignAndJustify from "../components/flex/examples/flex-align-and-justify.vue"

import Grid from "../components/grid/examples/grid.vue"
import GridWithDifferentSizes from "../components/grid/examples/grid-with-different-sizes.vue"

import Form from "../components/form/examples/form.vue"

export default {
  name: "VegaComponents",
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
    DropdownWithDynamicSearchableMenu,
    Icon,
    ImageUploader,
    InputField,
    InputCreditCard,
    ItemToggle,
    Modal,
    LoadingIndicator,
    LoadingIndicatorBar,
    LoadingIndicatorCircleDeterminate,
    LoadingIndicatorBarDeterminate,
    LoadingIndicatorCircleDeterminateSuccess,
    LoadingIndicatorCircleDeterminateError,
    PageNotification,
    PageNotificationWithActions,
    PageNotificationTypes,
    Pagination,
    PaginationWithNumberOfPagesViewed,
    PaginationWithVariableItemNumberDisplay,
    PaginationCombinedExample,
    PaginationWithOrdering,
    ProgressTracker,
    ProgressTrackerHorizontal,
    Popover,
    Radio,
    InputSelect,
    InputSelectSmall,
    Sidenav,
    Stepper,
    TabGroup,
    TabGroupWithCloseButtons,
    TabGroupWithOverflowTabs,
    TableBasic,
    TableWithCustomColumns,
    TableWithSelection,
    TableWithSorting,
    TableWithExpandableRow,
    TableWithClickableRow,
    TableOverflowColumnsWithEllipsis,
    TableWithPaginationAndDividers,
    TableDensityDefault,
    TableDensityCompact,
    TableDensityRelaxed,
    TableDensityResponsive,
    TableWithHorizontalPadding,
    TableEditable,
    TableEditableComplex,
    TextareaBasic,
    TimePicker,
    TimePicker24Hour,
    ToggleSwitch,
    Tooltip,
    Box,
    Card,
    Flex,
    FlexWithDifferentWidth,
    FlexCombination,
    FlexAlignAndJustify,
    Grid,
    GridWithDifferentSizes,
    Form
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
        <ComponentSubContent
          subTitle="Example with chevron on left"
          :background="true"
        >
          <Accordion />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with chevron on right"
          :background="true"
        >
          <AccordionWithRightChevron />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'app-footer'">
      <ComponentContent title="App Footer">
        <ComponentSubContent
          subTitle="Standard App Footer"
          :background="true"
        >
          <AppFooter />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="App Footer with Additional Links"
          :background="true"
        >
          <AppFooterWithAdditionalLinks />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'badge'">
      <ComponentContent title="Badge">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Badge />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'banner'">
      <ComponentContent title="Banner">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Banner />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example of sticky header mode"
          :background="true"
        >
          <bannerStickyHeaderIframe />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'banner-with-sticky-header-iframe'">
      <BannerWithStickyHeader />
    </div>
    <div v-if="activeComponent == 'button'">
      <ComponentContent title="Button">
        <ComponentSubContent
          subTitle="Primary variant"
          :background="true"
        >
          <ButtonPrimary />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Primary variant with icon"
          :background="true"
        >
          <ButtonWithIcon />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Secondary Variant"
          :background="true"
        >
          <ButtonSecondary />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Small Button"
          :background="true"
        >
          <ButtonSmall />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Large Button"
          :background="true"
        >
          <ButtonLarge />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'button-circle'">
      <ComponentContent title="Button Circle">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ButtonCircle />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Search Button"
          :background="true"
        >
          <ButtonCircleWithSearchIcon />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Search Button"
          :background="true"
        >
          <ButtonCircleDanger />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'button-link'">
      <ComponentContent title="Button Link">
        <ComponentSubContent
          subTitle="Basic Link"
          :background="true"
        >
          <ButtonLink />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Link with icon"
          :background="true"
        >
          <ButtonLinkWithIcon />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Danger"
          :background="true"
        >
          <ButtonLinkDanger />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'carousel'">
      <ComponentContent title="Carousel">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Carousel />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with button controls"
          :background="true"
        >
          <CarouselWithButtonControls />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'checkbox'">
      <ComponentContent title="Checkbox">
        <ComponentSubContent
          subTitle="Single Checkbox"
          :background="true"
        >
          <Checkbox />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Checkbox Group"
          :background="true"
        >
          <CheckboxGroup />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'chip'">
      <ComponentContent title="Chip">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Chip />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with Border and Responsive Size"
          :background="true"
        >
          <ChipWithBorderAndResponsiveSize />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Status Example"
          :background="true"
        >
          <ChipStatus />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'color-picker'">
      <ComponentContent title="Color Picker">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ColorPicker />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with new color array"
          :background="true"
        >
          <ColorPickerWithColorArray />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'combo-box'">
      <ComponentContent title="Combo Box">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ComboBox />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with createable options"
          :background="true"
        >
          <ComboBoxWithCreatableOptions />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'counter-badge'">
      <ComponentContent title="Counter Badge">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <CounterBadge />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example using Dot"
          :background="true"
        >
          <CounterBadgeWithDot />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'date-picker'">
      <ComponentContent title="Date Picker">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <DatePicker />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Range Example"
          :background="true"
        >
          <DatePickerWithRange />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Range with Min and Max Date"
          :background="true"
        >
          <DatePickerWithRangeWithMinMaxDate />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'dropdown'">
      <ComponentContent title="Dropdown Menu">
        <ComponentSubContent
          subTitle="Example with linkable menu"
          :background="true"
        >
          <Dropdown />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with dynamic searchable menu"
          :background="true"
        >
          <DropdownWithDynamicSearchableMenu />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'icon'">
      <ComponentContent title="Icon">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Icon />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'image-uploader'">
      <ComponentContent title="Image Uploader">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ImageUploader />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'input'">
      <ComponentContent title="Input Field">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <InputField />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'input-credit-card'">
      <ComponentContent title="Input Credit Card">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <InputCreditCard />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'item-toggle'">
      <ComponentContent title="Item Toggle">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ItemToggle />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'modal'">
      <ComponentContent title="Modal">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Modal />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'loading-indicator'">
      <ComponentContent title="Loading Indicator">
        <ComponentSubContent
          subTitle="Indeterminate Examples"
          :background="true"
        >
          <div class="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <div class="v-font-field-label-sm-em v-mb-size-12 v-text-primary">Circle</div>
            <LoadingIndicator />
          </div>
          <div class="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <div class="v-font-field-label-sm-em v-mb-size-12 v-text-primary">Bar</div>
            <LoadingIndicatorBar />
          </div>
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Indeterminate Examples"
          :background="true"
        >
          <div class="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <div class="v-font-field-label-sm-em v-mb-size-12 v-text-primary">Circle</div>
            <LoadingIndicatorCircleDeterminate />
          </div>
          <div class="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <div class="v-font-field-label-sm-em v-mb-size-12 v-text-primary">Bar</div>
            <LoadingIndicatorBarDeterminate />
          </div>
          <div class="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <div class="v-font-field-label-sm-em v-mb-size-12 v-text-primary">Success</div>
            <LoadingIndicatorCircleDeterminateSuccess />
          </div>
          <div class="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <div class="v-font-field-label-sm-em v-mb-size-12 v-text-primary">Error</div>
            <LoadingIndicatorCircleDeterminateError />
          </div>
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'page-notification'">
      <ComponentContent title="PageNotification">
        <ComponentSubContent
          subTitle="With Titles"
          :background="true"
        >
          <PageNotification />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="With Actions"
          :background="true"
        >
          <PageNotificationWithActions />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Notification Types"
          :background="true"
        >
          <PageNotificationTypes />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'pagination'">
      <ComponentContent title="Pagination">
        <ComponentSubContent
          subTitle="Simple Pagination"
          :background="true"
        >
          <Pagination />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with number of pages viewed"
          :background="true"
        >
          <PaginationWithNumberOfPagesViewed />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with variable item number display"
          :background="true"
        >
          <PaginationWithVariableItemNumberDisplay />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Combined Example"
          :background="true"
        >
          <PaginationCombinedExample />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with ordering"
          :background="true"
        >
          <PaginationWithOrdering />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'progress-tracker'">
      <ComponentContent title="Progress Tracker">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ProgressTracker />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Horizontal Example"
          :background="true"
        >
          <ProgressTrackerHorizontal />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'popover'">
      <ComponentContent title="Popover">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Popover />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'radio'">
      <ComponentContent title="Radio Button">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Radio />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'input-select'">
      <ComponentContent title="Input Select">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <InputSelect />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Small Example"
          :background="true"
        >
          <InputSelectSmall />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'sidenav'">
      <ComponentContent title="Sidebar Navigation">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Sidenav />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'stepper'">
      <ComponentContent title="Stepper">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Stepper />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'tab-group'">
      <ComponentContent title="Tab Group">
        <ComponentSubContent
          subTitle="Basic Example"
          :background="true"
        >
          <TabGroup />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with Close Buttons"
          :background="true"
        >
          <TabGroupWithCloseButtons />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with overflow tabs"
          :background="true"
        >
          <TabGroupWithOverflowTabs />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'table'">
      <ComponentContent title="Table">
        <ComponentSubContent
          subTitle="Basic Example"
          :background="true"
        >
          <TableBasic />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with Custom Columns"
          :background="true"
        >
          <TableWithCustomColumns />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with Selection"
          :background="true"
        >
          <TableWithSelection />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with Sorting"
          :background="true"
        >
          <TableWithSorting />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Expandable Row Example"
          :background="true"
        >
          <TableWithExpandableRow />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Clickable Row Example"
          :background="true"
        >
          <TableWithClickableRow />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Overflow columns with Ellipsis"
          :background="true"
        >
          <TableOverflowColumnsWithEllipsis />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with Pagination and Dividers"
          :background="true"
        >
          <TableWithPaginationAndDividers />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Density Examples"
          :background="true"
        >
          <div className="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <TableDensityDefault />
          </div>
          <div className="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <TableDensityCompact />
          </div>
          <div className="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <TableDensityRelaxed />
          </div>
          <div className="v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12">
            <TableDensityResponsive />
          </div>
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Horizontal Padding Example"
          :background="true"
        >
          <TableWithHorizontalPadding />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Basic Editable Table Example"
          :background="true"
        >
          <TableEditable />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Complex Editable Table Example"
          :background="true"
        >
          <TableEditableComplex />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'textarea'">
      <ComponentContent title="Text Area">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <TextareaBasic />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'time-picker'">
      <ComponentContent title="Time Picker">
        <ComponentSubContent
          subTitle="12-hour Example"
          :background="true"
        >
          <TimePicker />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="24-hour Example"
          :background="true"
        >
          <TimePicker24Hour />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'toggle-switch'">
      <ComponentContent title="Toggle Switch">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <ToggleSwitch />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'tooltip'">
      <ComponentContent title="Tooltip">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Tooltip />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'box'">
      <ComponentContent title="Box">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Box />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'card'">
      <ComponentContent title="Card">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Card />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'flex'">
      <ComponentContent title="Flex">
        <ComponentSubContent
          subTitle="Child Items with the same width"
          :background="true"
        >
          <Flex />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Child Items with a different width"
          :background="true"
        >
          <FlexWithDifferentWidth />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Combination"
          :background="true"
        >
          <FlexCombination />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Align and Justify"
          :background="true"
        >
          <FlexAlignAndJustify />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'grid'">
      <ComponentContent title="Grid">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Grid />
        </ComponentSubContent>
        <ComponentSubContent
          subTitle="Example with different sizes"
          :background="true"
        >
          <GridWithDifferentSizes />
        </ComponentSubContent>
      </ComponentContent>
    </div>
    <div v-if="activeComponent == 'form'">
      <ComponentContent title="Form">
        <ComponentSubContent
          subTitle="Example"
          :background="true"
        >
          <Form />
        </ComponentSubContent>
      </ComponentContent>
    </div>
  </main>
</template>
