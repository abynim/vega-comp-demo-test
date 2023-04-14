import { ScrollRestoration, useParams } from "react-router-dom";
import ComponentContent from "./ComponentContent";
import ComponentSubContent from "./ComponentSubContent";

import Accordion from "../../components/accordion/examples/accordion";
import AccordionWithRightChevron from "../../components/accordion/examples/accordion-with-right-chevron";

import AppFooter from "../../components/app-footer/examples/app-footer";
import AppFooterWithAdditionalLinks from "../../components/app-footer/examples/app-footer-with-additional-links";

import Badge from "../../components/badge/examples/badge";

import Banner from "../../components/banner/examples/banner";
import BannerWithStickyHeader from "../../components/banner/examples/banner-sticky-header";
import BannerStickyHeaderIFrame from "../../components/banner/examples/banner-sticky-header-iframe";

import Button from "../../components/button/examples/button";
import ButtonWithIcon from "../../components/button/examples/button-with-icon";
import ButtonSecondaryVariant from "../../components/button/examples/button-secondary-variant";
import ButtonSmall from "../../components/button/examples/button-small";
import ButtonLarge from "../../components/button/examples/button-large";

import ButtonCircle from "../../components/button-circle/examples/button-circle";
import ButtonCircleWithSearchIcon from "../../components/button-circle/examples/button-circle-with-search-icon";
import ButtonCircleDanger from "../../components/button-circle/examples/button-circle-danger";

import ButtonLink from "../../components/button-link/examples/button-link";
import ButtonLinkWithIcon from "../../components/button-link/examples/button-link-with-icon";
import ButtonLinkDanger from "../../components/button-link/examples/button-link-danger";

import Carousel from "../../components/carousel/examples/carousel";
import CarouselWithButtonControls from "../../components/carousel/examples/carousel-with-button-controls";

import SingleCheckbox from "../../components/checkbox/examples/single-checkbox";
import CheckboxGroup from "../../components/checkbox/examples/checkbox-group";

import Chip from "../../components/chip/examples/chip";
import ChipWithBorderAndResponsiveSize from "../../components/chip/examples/chip-with-border-and-responsive-size";
import ChipStatus from "../../components/chip/examples/chip-status";

import ColorPicker from "../../components/color-picker/examples/color-picker";
import ColorPickerWithColorArray from "../../components/color-picker/examples/color-picker-with-color-array";

import ComboBox from "../../components/combo-box/examples/combo-box";
import ComboBoxWithCreatableOptions from "../../components/combo-box/examples/combo-box-with-creatable-options";

import CounterBadge from "../../components/counter-badge/examples/counter-badge";
import CounterBadgeWithDot from "../../components/counter-badge/examples/counter-badge-with-dot";

import DatePicker from "../../components/date-picker/examples/date-picker";
import DatePickerWithRange from "../../components/date-picker/examples/date-picker-with-range";
import DatePickerWithRangeWithMinMaxDate from "../../components/date-picker/examples/date-picker-with-range-with-min-max-date";

import Dropdown from "../../components/dropdown/examples/dropdown";
import DropdownWithDynamicSearchableMenu from "../../components/dropdown/examples/dropdown-with-dynamic-searchable-menu";

import Icon from "../../components/icon/examples/icon";

import ImageUploader from "../../components/image-uploader/examples/image-uploader";

import InputField from "../../components/input/example/input-field";

import InputCreditCard from "../../components/input-credit-card/examples/input-credit-card";

import ItemToggle from "../../components/item-toggle/examples/item-toggle";

import Modal from "../../components/modal/examples/modal";

import LoadingIndicator from "../../components/loading-indicator/examples/loading-indicator";
import LoadingIndicatorBar from "../../components/loading-indicator/examples/loading-indicator-bar";
import LoadingIndicatorCircleDeterminate from "../../components/loading-indicator/examples/loading-indicator-circle-determinate";
import LoadingIndicatorBarDeterminate from "../../components/loading-indicator/examples/loading-indicator-bar-determinate";
import LoadingIndicatorCircleDeterminateSuccess from "../../components/loading-indicator/examples/loading-indicator-circle-determinate-success";
import LoadingIndicatorCircleDeterminateError from "../../components/loading-indicator/examples/loading-indicator-circle-determinate-error";

import PageNotification from "../../components/page-notification/examples/page-notification";
import PageNotificationWithActions from "../../components/page-notification/examples/page-notification-with-actions";
import PageNotificationTypes from "../../components/page-notification/examples/page-notification-types";

import Pagination from "../../components/pagination/examples/pagination";
import PaginationWithNumberOfPagesViewed from "../../components/pagination/examples/pagination-with-number-of-pages-viewed";
import PaginationWithVariableItemNumberDisplay from "../../components/pagination/examples/pagination-with-variable-item-number-display";
import PaginationCombinedExample from "../../components/pagination/examples/pagination-combined-example";
import PaginationWithOrdering from "../../components/pagination/examples/pagination-with-ordering";

import ProgressTracker from "../../components/progress-tracker/examples/progress-tracker";
import ProgressTrackerHorizontal from "../../components/progress-tracker/examples/progress-tracker-horizontal";

import Popover from "../../components/popover/examples/popover";
import RadioButton from "../../components/radio/examples/radio-button";

import Select from "../../components/input-select/examples/select";
import SelectSmall from "../../components/input-select/examples/select-small";

import SidebarNavigation from "../../components/sidenav/examples/sidebar-navigation";

import Stepper from "../../components/stepper/examples/stepper";
import TabGroup from "../../components/tab-group/examples/tab-group";
import TabGroupWithCloseButtons from "../../components/tab-group/examples/tab-group-with-close-buttons";
import TabGroupWithOverflowTabs from "../../components/tab-group/examples/tab-group-with-overflow-tabs";

import Table from "../../components/table/examples/table";
import TableWithCustomColumns from "../../components/table/examples/table-custom-columns";
import TableWithSelection from "../../components/table/examples/table-with-selection";
import TableWithSorting from "../../components/table/examples/table-with-sorting";
import TableWithExpandableRow from "../../components/table/examples/table-with-expandable-row";
import TableWithClickableRow from "../../components/table/examples/table-with-clickable-row";
import TableOverflowColumnsWithEllipsis from "../../components/table/examples/table-overflow-columns-with-ellipsis";
import TableWithPaginationAndDividers from "../../components/table/examples/table-with-pagination-and-dividers";
import TableDensityDefault from "../../components/table/examples/table-density-default";
import TableDensityCompact from "../../components/table/examples/table-density-compact";
import TableDensityRelaxed from "../../components/table/examples/table-density-relaxed";
import TableDensityResponsive from "../../components/table/examples/table-density-responsive";
import TableWithHorizontalPadding from "../../components/table/examples/table-with-horizontal-padding";
import TableEditable from "../../components/table/examples/table-editable";
import TableEditableComplex from "../../components/table/examples/table-editable-complex";

import TextArea from "../../components/textarea/examples/text-area";

import TimePicker from "../../components/time-picker/examples/time-picker";
import TimePicker24Hour from "../../components/time-picker/examples/time-picker-24-hour";

import ToggleSwitch from "../../components/toggle-switch/examples/toggle-switch";

import Tooltip from "../../components/tooltip/examples/tooltip";

export default function Component({ params }) {
  let { component } = useParams();
  return (
    <>
      {component === "checkbox" && (
        <ComponentContent title={`Checkbox`}>
          <ComponentSubContent subTitle={`Single Checkbox`}>
            <SingleCheckbox />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Checkbox Group`}>
            <CheckboxGroup />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "accordion" && (
        <ComponentContent title="Accordion">
          <ComponentSubContent
            subTitle={`Example with chevron on left`}
            background={true}
          >
            <Accordion />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with chevron on right`}
            background={true}
          >
            <AccordionWithRightChevron />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "app-footer" && (
        <ComponentContent title={`App Footer`}>
          <ComponentSubContent
            subTitle={`Standard App Footer`}
            background={true}
          >
            <AppFooter />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`App Footer with Additional Links`}
            background={true}
          >
            <AppFooterWithAdditionalLinks />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "badge" && (
        <ComponentContent title={`Badge`}>
          <Badge />
        </ComponentContent>
      )}
      {component === "banner" && (
        <ComponentContent title={`Banner`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Banner />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example of sticky header mode`}
            background={true}
          >
            <BannerStickyHeaderIFrame />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "banner-sticky-header" && <BannerWithStickyHeader />}
      {component === "button" && (
        <ComponentContent title={`Button`}>
          <ComponentSubContent subTitle={`Primary variant`} background={true}>
            <Button />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Primary variant with icon`}
            background={true}
          >
            <ButtonWithIcon />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Secondary Variant`} background={true}>
            <ButtonSecondaryVariant />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Small Button`} background={true}>
            <ButtonSmall />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Large Button`} background={true}>
            <ButtonLarge />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "button-circle" && (
        <ComponentContent title={`Button Circle`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ButtonCircle />
          </ComponentSubContent>
          <ComponentSubContent subTitle={` Search Button`} background={true}>
            <ButtonCircleWithSearchIcon />
          </ComponentSubContent>
          <ComponentSubContent subTitle={` Danger Button`} background={true}>
            <ButtonCircleDanger />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "button-link" && (
        <ComponentContent title={`Button Link`}>
          <ComponentSubContent subTitle={`Basic Link`} background={true}>
            <ButtonLink />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Link with icon`} background={true}>
            <ButtonLinkWithIcon />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Danger`} background={true}>
            <ButtonLinkDanger />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "carousel" && (
        <ComponentContent title={`Carousel`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Carousel />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with button controls`}
            background={true}
          >
            <CarouselWithButtonControls />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "chip" && (
        <ComponentContent title={`Chip`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Chip />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with Border and Responsive Size`}
            background={true}
          >
            <ChipWithBorderAndResponsiveSize />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Status Example`} background={true}>
            <ChipStatus />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "color-picker" && (
        <ComponentContent title={`Color Picker`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ColorPicker />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with new color array`}
            background={true}
          >
            <ColorPickerWithColorArray />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "combo-box" && (
        <ComponentContent title={`Combo Box`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ComboBox />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with createable options`}
            background={true}
          >
            <ComboBoxWithCreatableOptions />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "counter-badge" && (
        <ComponentContent title={`Counter Badge`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <CounterBadge />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Example using Dot`} background={true}>
            <CounterBadgeWithDot />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "date-picker" && (
        <ComponentContent title={`Date Picker`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <DatePicker />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Range Example`} background={true}>
            <DatePickerWithRange />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Range with Min and Max Date`}
            background={true}
          >
            <DatePickerWithRangeWithMinMaxDate />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "dropdown" && (
        <ComponentContent title={`Dropdown Menu`}>
          <ComponentSubContent
            subTitle={`Example with linkable menu`}
            background={true}
          >
            <Dropdown />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with dynamic searchable menu`}
            background={true}
          >
            <DropdownWithDynamicSearchableMenu />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "icon" && (
        <ComponentContent title={`Icon`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Icon />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "image-uploader" && (
        <ComponentContent title={`Image Uploader`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ImageUploader />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "input-field" && (
        <ComponentContent title={`Input Field`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <InputField />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "input-credit-card" && (
        <ComponentContent title={`Input Credit Card`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <InputCreditCard />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "item-toggle" && (
        <ComponentContent title={`Item Toggle`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ItemToggle />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "modal" && (
        <ComponentContent title={`Modal`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Modal />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "loading-indicator" && (
        <ComponentContent title={`Loading Indicator`}>
          <ComponentSubContent
            subTitle={`Indeterminate Examples`}
            background={true}
          >
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <div className="v-font-field-label-sm-em v-mb-size-12 v-text-primary">
                Circle
              </div>
              <LoadingIndicator />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <div className="v-font-field-label-sm-em v-mb-size-12 v-text-primary">
                Bar
              </div>
              <LoadingIndicatorBar />
            </div>
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Indeterminate Examples`}
            background={true}
          >
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <div className="v-font-field-label-sm-em v-mb-size-12 v-text-primary">
                Circle
              </div>
              <LoadingIndicatorCircleDeterminate />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <div className="v-font-field-label-sm-em v-mb-size-12 v-text-primary">
                Bar
              </div>
              <LoadingIndicatorBarDeterminate />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <div className="v-font-field-label-sm-em v-mb-size-12 v-text-primary">
                Success
              </div>
              <LoadingIndicatorCircleDeterminateSuccess />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <div className="v-font-field-label-sm-em v-mb-size-12 v-text-primary">
                Error
              </div>
              <LoadingIndicatorCircleDeterminateError />
            </div>
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "page-notification" && (
        <ComponentContent title={`PageNotification`}>
          <ComponentSubContent subTitle={`With Titles`} background={true}>
            <PageNotification />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`With Actions`} background={true}>
            <PageNotificationWithActions />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Notification Types`}
            background={true}
          >
            <PageNotificationTypes />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "pagination" && (
        <ComponentContent title={`Pagination`}>
          <ComponentSubContent subTitle={`Simple Pagination`} background={true}>
            <Pagination />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with number of pages viewed`}
            background={true}
          >
            <PaginationWithNumberOfPagesViewed />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with variable item number display`}
            background={true}
          >
            <PaginationWithVariableItemNumberDisplay />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Combined Example`} background={true}>
            <PaginationCombinedExample />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with ordering`}
            background={true}
          >
            <PaginationWithOrdering />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "progress-tracker" && (
        <ComponentContent title={`Progress Tracker`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ProgressTracker />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Horizontal Example`}
            background={true}
          >
            <ProgressTrackerHorizontal />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "popover" && (
        <ComponentContent title={`Popover`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Popover />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "radio-button" && (
        <ComponentContent title={`Radio Button`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <RadioButton />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "select" && (
        <ComponentContent title={`Select`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Select />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Small Example`} background={true}>
            <SelectSmall />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "sidebar-navigation" && (
        <ComponentContent title={`Sidebar Navigation`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <SidebarNavigation />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "stepper" && (
        <ComponentContent title={`Stepper`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Stepper />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "tab-group" && (
        <ComponentContent title={`Tab Group`}>
          <ComponentSubContent subTitle={`Basic Example`} background={true}>
            <TabGroup />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with Close Buttons`}
            background={true}
          >
            <TabGroupWithCloseButtons />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with overflow tabs`}
            background={true}
          >
            <TabGroupWithOverflowTabs />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "table" && (
        <ComponentContent title={`Table`}>
          <ComponentSubContent subTitle={`Basic Example`} background={true}>
            <Table />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with Custom Columns`}
            background={true}
          >
            <TableWithCustomColumns />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with Selection`}
            background={true}
          >
            <TableWithSelection />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with Sorting`}
            background={true}
          >
            <TableWithSorting />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Expandable Row Example`}
            background={true}
          >
            <TableWithExpandableRow />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Clickable Row Example`}
            background={true}
          >
            <TableWithClickableRow />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Overflow columns with Ellipsis`}
            background={true}
          >
            <TableOverflowColumnsWithEllipsis />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Example with Pagination and Dividers`}
            background={true}
          >
            <TableWithPaginationAndDividers />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`Density Examples`} background={true}>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <TableDensityDefault />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <TableDensityCompact />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <TableDensityRelaxed />
            </div>
            <div
              className={`v-mb-size-32 v-border-divider-secondary v-rounded-12 v-p-size-12`}
            >
              <TableDensityResponsive />
            </div>
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Horizontal Padding Example`}
            background={true}
          >
            <TableWithHorizontalPadding />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Basic Editable Table Example`}
            background={true}
          >
            <TableEditable />
          </ComponentSubContent>
          <ComponentSubContent
            subTitle={`Complex Editable Table Example`}
            background={true}
          >
            <TableEditableComplex />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "text-area" && (
        <ComponentContent title={`Text Area`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <TextArea />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "time-picker" && (
        <ComponentContent title={`Time Picker`}>
          <ComponentSubContent subTitle={`12-hour Example`} background={true}>
            <TimePicker />
          </ComponentSubContent>
          <ComponentSubContent subTitle={`24-hour example`} background={true}>
            <TimePicker24Hour />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "toggle-switch" && (
        <ComponentContent title={`Toggle Switch`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <ToggleSwitch />
          </ComponentSubContent>
        </ComponentContent>
      )}
      {component === "tooltip" && (
        <ComponentContent title={`Tooltip`}>
          <ComponentSubContent subTitle={`Example`} background={true}>
            <Tooltip />
          </ComponentSubContent>
        </ComponentContent>
      )}
      <ScrollRestoration />
    </>
  );
}
