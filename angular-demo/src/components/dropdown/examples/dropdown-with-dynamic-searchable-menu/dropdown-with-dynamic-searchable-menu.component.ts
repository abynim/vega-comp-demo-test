import { Component, ViewChild } from "@angular/core"

export interface SourceMapObject {
  [key: string]: {
    label: string
    key: string
    url: string
  }
}

@Component({
  selector: "app-dropdown-with-dynamic-searchable-menu",
  templateUrl: "./dropdown-with-dynamic-searchable-menu.component.html",
  styleUrls: ["./dropdown-with-dynamic-searchable-menu.component.scss"]
})
export class DropdownWithDynamicSearchableMenuComponent {
  @ViewChild("dropdown") dropdown!: HTMLVegaDropdownElement
  sourceMap: SourceMapObject = {
    google: {
      label: "Google",
      key: "google",
      url: "https://google.com"
    },
    vega: {
      label: "Vega",
      key: "vega",
      url: "https://vega.hlprd.com/"
    }
  }

  objectValues = Object.values

  onCreate(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const value = customEvent.detail
    this.dropdown.source.push({ key: value, label: value })
    this.sourceMap[value] = {
      label: value,
      key: value,
      url: ""
    }
  }
  onLinkClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const value = customEvent.detail
    window.open(this.sourceMap[value].url, "_blank")
  }
}
