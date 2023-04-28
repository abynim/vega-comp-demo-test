import { Component, OnInit } from "@angular/core"

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "angular-demo"

  links = [
    { ref: "accordion", title: "Accordion" },
    { ref: "app-footer", title: "App Footer" },
    { ref: "badge", title: "Badge" },
    { ref: "banner", title: "Banner" },
    { ref: "button", title: "Button" },
    { ref: "button-circle", title: "Button Circle" },
    { ref: "button-link", title: "Button Link" },
    { ref: "carousel", title: "Carousel" },
    { ref: "checkbox", title: "Checkbox" },
    { ref: "chip", title: "Chip" },
    { ref: "color-picker", title: "Color Picker" },
    { ref: "combo-box", title: "Combo Box" },
    { ref: "counter-badge", title: "Counter Badge" },
    { ref: "date-picker", title: "Date Picker" },
    { ref: "dropdown", title: "Dropdown Menu" },
    { ref: "icon", title: "Icon" },
    { ref: "image-uploader", title: "Image Uploader" },
    { ref: "input", title: "Input Field" },
    { ref: "input-credit-card", title: "Input Credit Card" },
    { ref: "item-toggle", title: "Item Toggle" },
    { ref: "modal", title: "Modal" },
    { ref: "loading-indicator", title: "Loading Indicator" },
    { ref: "page-notification", title: "Page Notification" },
    { ref: "pagination", title: "Pagination" },
    { ref: "progress-tracker", title: "Progress Tracker" },
    { ref: "popover", title: "Popover" },
    { ref: "radio", title: "Radio Button" },
    { ref: "input-select", title: "Input Select" },
    { ref: "sidenav", title: "Sidebar Navigation" },
    { ref: "stepper", title: "Stepper" },
    { ref: "tab-group", title: "Tab Group" },
    { ref: "table", title: "Table" },
    { ref: "textarea", title: "Text Area" },
    { ref: "time-picker", title: "Time Picker" },
    { ref: "toggle-switch", title: "Toggle Switch" },
    { ref: "tooltip", title: "Tooltip" },
    { ref: "box", title: "Box" },
    { ref: "card", title: "Card" },
    { ref: "flex", title: "Flex" },
    { ref: "grid", title: "Grid" },
    { ref: "form", title: "Form" }
  ]

  constructor() {}

  ngOnInit(): void {}
}
