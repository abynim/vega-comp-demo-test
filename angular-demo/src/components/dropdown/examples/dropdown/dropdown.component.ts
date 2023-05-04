import { Component } from "@angular/core"

export interface SourceMap {
  [key: string]: {
    label: string
    key: string
    url: string
    group: string
  }
}

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.scss"]
})
export class DropdownComponent {
  sourceMap: SourceMap = {
    google: {
      label: "Google",
      key: "google",
      url: "https://google.com",
      group: "links"
    },
    vega: {
      label: "Vega",
      key: "vega",
      url: "https://vega.hlprd.com/",
      group: "links"
    },
    option3: { label: "Option3", key: "option3", url: "#", group: "options" }
  }

  objectValues = Object.values

  onLinkClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const value = customEvent.detail
    console.log({ value, s: this.sourceMap })
    window.open(this.sourceMap[value].url, "_blank")
  }
}
