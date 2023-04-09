import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { VegaGrid, VegaCard } from "@heartlandone/vega-react";
import "./index.css";

export default function Components() {
  const { component } = useParams();
  const componentsLinks = [
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
    { ref: "input-field", title: "Input Field" },
    { ref: "input-credit-card", title: "Input Credit Card" },
    { ref: "item-toggle", title: "Item Toggle" },
    { ref: "modal", title: "Modal" },
    { ref: "loading-indicator", title: "Loading Indicator" },
    { ref: "page-notification", title: "Page Notification" },
    { ref: "pagination", title: "Pagination" },
    { ref: "progress-tracker", title: "Progress Tracker" },
    { ref: "popover", title: "Popover" },
    { ref: "radio-button", title: "Radio Button" },
    { ref: "select", title: "Select" },
    { ref: "sidebar-navigation", title: "Sidebar Navigation" },
    { ref: "stepper", title: "Stepper" },
    { ref: "tab-group", title: "Tab Group" },
    { ref: "table", title: "Table" },
    { ref: "text-area", title: "Text Area" },
    { ref: "time-picker", title: "Time Picker" },
    { ref: "toggle-switch", title: "Toggle Switch" },
    { ref: "tooltip", title: "Tooltip" },
  ];
  return (
    <VegaGrid column={{ default: 1, S: 1, L: 5 }} row={1} gap={`size-0`}>
      <VegaCard
        backgroundColor={`bg-page`}
        padding={`size-0`}
        className={`sidebar`}
      >
        <div
          className={`v-font-h3 v-text-primary v-py-size-12 v-px-size-32 header v-border-input-field`}
        >
          Components
        </div>
        <nav>
          <ul className={`v-px-size-32 v-py-size-12`}>
            {componentsLinks.map(function (link, i) {
              let isActive = component === link.ref;
              return (
                <li key={i}>
                  <Link
                    to={`components/${link.ref}`}
                    className={`v-font-field-label-em v-text-primary ${
                      isActive ? "active v-bg-action v-text-white" : ""
                    }`}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </VegaCard>
      <VegaCard
        style={{ gridColumn: "2 / span 5" }}
        className={`v-p-size-24 page-content`}
      >
        <Outlet />
      </VegaCard>
    </VegaGrid>
  );
}
