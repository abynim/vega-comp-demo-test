import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from "@angular/forms"
import { BrowserModule } from "@angular/platform-browser"
import { VegaComponentModule } from "@heartlandone/vega-angular"

import { AppRoutingModule } from "./app-routing.module"
import { AppComponent } from "./app.component"
import { ComponentsComponent } from "./components/components.component"
import { ComponentContentComponent } from "./component-content/component-content.component"
import { ComponentSubContentComponent } from "./component-sub-content/component-sub-content.component"
import { AccordionComponent } from "../components/accordion/examples/accordion/accordion.component"
import { AccordionWithRightChevronComponent } from "../components/accordion/examples/accordion-with-right-chevron/accordion-with-right-chevron.component"
import { AppFooterComponent } from "../components/app-footer/examples/app-footer/app-footer.component"
import { AppFooterWithAdditionalLinksComponent } from "../components/app-footer/examples/app-footer-with-additional-links/app-footer-with-additional-links.component"
import { BadgeComponent } from "../components/badge/examples/badge/badge.component"
import { BannerComponent } from "../components/banner/examples/banner/banner.component"
import { ButtonComponent } from "../components/button/examples/button/button.component"
import { ButtonWithIconComponent } from "../components/button/examples/button-with-icon/button-with-icon.component"
import { ButtonSecondaryVariantComponent } from "../components/button/examples/button-secondary-variant/button-secondary-variant.component"
import { ButtonSmallComponent } from "../components/button/examples/button-small/button-small.component"
import { ButtonLargeComponent } from "../components/button/examples/button-large/button-large.component"
import { ButtonCircleComponent } from "../components/button-circle/examples/button-circle/button-circle.component"
import { ButtonCircleWithSearchIconComponent } from "../components/button-circle/examples/button-circle-with-search-icon/button-circle-with-search-icon.component"
import { ButtonCircleDangerComponent } from "../components/button-circle/examples/button-circle-danger/button-circle-danger.component"
import { ButtonLinkComponent } from "../components/button-link/examples/button-link/button-link.component"
import { ButtonLinkWithIconComponent } from "../components/button-link/examples/button-link-with-icon/button-link-with-icon.component"
import { ButtonLinkDangerComponent } from "../components/button-link/examples/button-link-danger/button-link-danger.component"
import { CarouselComponent } from "../components/carousel/examples/carousel/carousel.component"
import { CarouselWithButtonControlsComponent } from "../components/carousel/examples/carousel-with-button-controls/carousel-with-button-controls.component"
import { SingleCheckboxComponent } from "../components/checkbox/examples/single-checkbox/single-checkbox.component"
import { CheckboxGroupComponent } from "../components/checkbox/examples/checkbox-group/checkbox-group.component"
import { ChipComponent } from "../components/chip/examples/chip/chip.component"
import { ChipWithBorderAndResponsiveSizeComponent } from "../components/chip/examples/chip-with-border-and-responsive-size/chip-with-border-and-responsive-size.component"
import { ChipStatusComponent } from "../components/chip/examples/chip-status/chip-status.component"
import { ColorPickerComponent } from "../components/color-picker/examples/color-picker/color-picker.component"
import { ColorPickerWithColorArrayComponent } from "../components/color-picker/examples/color-picker-with-color-array/color-picker-with-color-array.component"
import { ComboBoxComponent } from "../components/combo-box/examples/combo-box/combo-box.component"
import { ComboBoxWithCreatableOptionsComponent } from "../components/combo-box/examples/combo-box-with-creatable-options/combo-box-with-creatable-options.component"
import { CounterBadgeComponent } from "../components/counter-badge/examples/counter-badge/counter-badge.component"
import { CounterBadgeWithDotComponent } from "../components/counter-badge/examples/counter-badge-with-dot/counter-badge-with-dot.component"
import { DatePickerComponent } from "../components/date-picker/examples/date-picker/date-picker.component"
import { DatePickerWithRangeComponent } from "../components/date-picker/examples/date-picker-with-range/date-picker-with-range.component"
import { DatePickerWithRangeWithMinMaxDateComponent } from "../components/date-picker/examples/date-picker-with-range-with-min-max-date/date-picker-with-range-with-min-max-date.component"
import { DropdownComponent } from "../components/dropdown/examples/dropdown/dropdown.component"
import { DropdownWithDynamicSearchableMenuComponent } from "../components/dropdown/examples/dropdown-with-dynamic-searchable-menu/dropdown-with-dynamic-searchable-menu.component"
import { IconComponent } from "../components/icon/examples/icon/icon.component"
import { ImageUploaderComponent } from "../components/image-uploader/examples/image-uploader/image-uploader.component"
import { InputComponent } from "../components/input/examples/input/input.component"
import { InputCreditCardComponent } from "../components/input-credit-card/examples/input-credit-card/input-credit-card.component"
import { ItemToggleComponent } from "../components/item-toggle/examples/item-toggle/item-toggle.component"
import { ModalComponent } from "../components/modal/examples/modal/modal.component"
import { PopoverComponent } from "../components/popover/examples/popover/popover.component"
import { RadioComponent } from "../components/radio/examples/radio/radio.component"
import { InputSelectComponent } from "../components/input-select/examples/input-select/input-select.component"
import { InputSelectSmallComponent } from "../components/input-select/examples/input-select-small/input-select-small.component"
import { SidenavComponent } from "../components/sidenav/examples/sidenav/sidenav.component"
import { StepperComponent } from "../components/stepper/examples/stepper/stepper.component"
import { TabGroupComponent } from "../components/tab-group/examples/tab-group/tab-group.component"
import { TabGroupWithCloseButtonsComponent } from "../components/tab-group/examples/tab-group-with-close-buttons/tab-group-with-close-buttons.component"
import { TabGroupWithOverflowTabsComponent } from "../components/tab-group/examples/tab-group-with-overflow-tabs/tab-group-with-overflow-tabs.component"
import { TextareaComponent } from "../components/textarea/examples/textarea/textarea.component"
import { TimePickerComponent } from "../components/time-picker/examples/time-picker/time-picker.component"
import { TimePicker24HourComponent } from "../components/time-picker/examples/time-picker-24-hour/time-picker-24-hour.component"
import { ToggleSwitchComponent } from "../components/toggle-switch/examples/toggle-switch/toggle-switch.component"
import { TooltipComponent } from "../components/tooltip/examples/tooltip/tooltip.component"
import { BoxComponent } from "../components/box/examples/box/box.component"
import { CardComponent } from "../components/card/examples/card/card.component"
import { FlexComponent } from "../components/flex/examples/flex/flex.component"
import { FlexWithDifferentWidthComponent } from "../components/flex/examples/flex-with-different-width/flex-with-different-width.component"
import { FlexCombinationComponent } from "../components/flex/examples/flex-combination/flex-combination.component"
import { FlexAlignAndJustifyComponent } from "../components/flex/examples/flex-align-and-justify/flex-align-and-justify.component"
import { GridComponent } from "../components/grid/examples/grid/grid.component"
import { GridWithDifferentSizesComponent } from "../components/grid/examples/grid-with-different-sizes/grid-with-different-sizes.component"
import { FormComponent } from "../components/form/examples/form/form.component"
import { LoadingIndicatorComponent } from "../components/loading-indicator/examples/loading-indicator/loading-indicator.component"
import { LoadingIndicatorBarComponent } from "../components/loading-indicator/examples/loading-indicator-bar/loading-indicator-bar.component"
import { LoadingIndicatorCircleDeterminateComponent } from "../components/loading-indicator/examples/loading-indicator-circle-determinate/loading-indicator-circle-determinate.component"
import { LoadingIndicatorBarDeterminateComponent } from "../components/loading-indicator/examples/loading-indicator-bar-determinate/loading-indicator-bar-determinate.component"
import { LoadingIndicatorCircleDeterminateSuccessComponent } from "../components/loading-indicator/examples/loading-indicator-circle-determinate-success/loading-indicator-circle-determinate-success.component"
import { LoadingIndicatorCircleDeterminateErrorComponent } from "../components/loading-indicator/examples/loading-indicator-circle-determinate-error/loading-indicator-circle-determinate-error.component"
import { PageNotificationComponent } from "../components/page-notification/examples/page-notification/page-notification.component"
import { PageNotificationWithActionsComponent } from "../components/page-notification/examples/page-notification-with-actions/page-notification-with-actions.component"
import { PageNotificationTypesComponent } from "../components/page-notification/examples/page-notification-types/page-notification-types.component"
import { ProgressTrackerComponent } from "../components/progress-tracker/examples/progress-tracker/progress-tracker.component"
import { ProgressTrackerHorizontalComponent } from "../components/progress-tracker/examples/progress-tracker-horizontal/progress-tracker-horizontal.component"
import { PaginationComponent } from "../components/pagination/examples/pagination/pagination.component"
import { PaginationWithNumberOfPagesViewedComponent } from "../components/pagination/examples/pagination-with-number-of-pages-viewed/pagination-with-number-of-pages-viewed.component"
import { PaginationWithVariableItemNumberDisplayComponent } from "../components/pagination/examples/pagination-with-variable-item-number-display/pagination-with-variable-item-number-display.component"
import { PaginationCombinedExampleComponent } from "../components/pagination/examples/pagination-combined-example/pagination-combined-example.component"
import { PaginationWithOrderingComponent } from "../components/pagination/examples/pagination-with-ordering/pagination-with-ordering.component"
import { TableComponent } from "../components/table/examples/table/table.component"
import { TableCustomColumnsComponent } from "../components/table/examples/table-custom-columns/table-custom-columns.component"
import { TableWithSelectionComponent } from "../components/table/examples/table-with-selection/table-with-selection.component"
import { TableWithSortingComponent } from "../components/table/examples/table-with-sorting/table-with-sorting.component"
import { TableWithExpandableRowComponent } from "../components/table/examples/table-with-expandable-row/table-with-expandable-row.component"
import { TableWithClickableRowComponent } from "../components/table/examples/table-with-clickable-row/table-with-clickable-row.component"
import { TableOverflowColumnsWithEllipsisComponent } from "../components/table/examples/table-overflow-columns-with-ellipsis/table-overflow-columns-with-ellipsis.component"
import { TableWithPaginationAndDividersComponent } from "../components/table/examples/table-with-pagination-and-dividers/table-with-pagination-and-dividers.component"
import { TableDensityDefaultComponent } from "../components/table/examples/table-density-default/table-density-default.component"
import { TableDensityCompactComponent } from "../components/table/examples/table-density-compact/table-density-compact.component"
import { TableDensityRelaxedComponent } from "../components/table/examples/table-density-relaxed/table-density-relaxed.component"
import { TableDensityResponsiveComponent } from "../components/table/examples/table-density-responsive/table-density-responsive.component"
import { TableWithHorizontalPaddingComponent } from "../components/table/examples/table-with-horizontal-padding/table-with-horizontal-padding.component"
import { TableEditableComponent } from "../components/table/examples/table-editable/table-editable.component"
import { TableEditableComplexComponent } from "../components/table/examples/table-editable-complex/table-editable-complex.component"

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    ComponentContentComponent,
    ComponentSubContentComponent,
    AccordionComponent,
    AccordionWithRightChevronComponent,
    AppFooterComponent,
    AppFooterWithAdditionalLinksComponent,
    BadgeComponent,
    BannerComponent,
    ButtonComponent,
    ButtonWithIconComponent,
    ButtonSecondaryVariantComponent,
    ButtonSmallComponent,
    ButtonLargeComponent,
    ButtonCircleComponent,
    ButtonCircleWithSearchIconComponent,
    ButtonCircleDangerComponent,
    ButtonLinkComponent,
    ButtonLinkWithIconComponent,
    ButtonLinkDangerComponent,
    CarouselComponent,
    CarouselWithButtonControlsComponent,
    SingleCheckboxComponent,
    CheckboxGroupComponent,
    ChipComponent,
    ChipWithBorderAndResponsiveSizeComponent,
    ChipStatusComponent,
    ColorPickerComponent,
    ColorPickerWithColorArrayComponent,
    ComboBoxComponent,
    ComboBoxWithCreatableOptionsComponent,
    CounterBadgeComponent,
    CounterBadgeWithDotComponent,
    DatePickerComponent,
    DatePickerWithRangeComponent,
    DatePickerWithRangeWithMinMaxDateComponent,
    DropdownComponent,
    DropdownWithDynamicSearchableMenuComponent,
    IconComponent,
    ImageUploaderComponent,
    InputComponent,
    InputCreditCardComponent,
    ItemToggleComponent,
    ModalComponent,
    PopoverComponent,
    RadioComponent,
    InputSelectComponent,
    InputSelectSmallComponent,
    SidenavComponent,
    StepperComponent,
    TabGroupComponent,
    TabGroupWithCloseButtonsComponent,
    TabGroupWithOverflowTabsComponent,
    TextareaComponent,
    TimePickerComponent,
    TimePicker24HourComponent,
    ToggleSwitchComponent,
    TooltipComponent,
    BoxComponent,
    CardComponent,
    FlexComponent,
    FlexWithDifferentWidthComponent,
    FlexCombinationComponent,
    FlexAlignAndJustifyComponent,
    GridComponent,
    GridWithDifferentSizesComponent,
    FormComponent,
    LoadingIndicatorComponent,
    LoadingIndicatorBarComponent,
    LoadingIndicatorCircleDeterminateComponent,
    LoadingIndicatorBarDeterminateComponent,
    LoadingIndicatorCircleDeterminateSuccessComponent,
    LoadingIndicatorCircleDeterminateErrorComponent,
    PageNotificationComponent,
    PageNotificationWithActionsComponent,
    PageNotificationTypesComponent,
    ProgressTrackerComponent,
    ProgressTrackerHorizontalComponent,
    PaginationComponent,
    PaginationWithNumberOfPagesViewedComponent,
    PaginationWithVariableItemNumberDisplayComponent,
    PaginationCombinedExampleComponent,
    PaginationWithOrderingComponent,
    TableComponent,
    TableCustomColumnsComponent,
    TableWithSelectionComponent,
    TableWithSortingComponent,
    TableWithExpandableRowComponent,
    TableWithClickableRowComponent,
    TableOverflowColumnsWithEllipsisComponent,
    TableWithPaginationAndDividersComponent,
    TableDensityDefaultComponent,
    TableDensityCompactComponent,
    TableDensityRelaxedComponent,
    TableDensityResponsiveComponent,
    TableWithHorizontalPaddingComponent,
    TableEditableComponent,
    TableEditableComplexComponent
  ],
  imports: [BrowserModule, AppRoutingModule, VegaComponentModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
