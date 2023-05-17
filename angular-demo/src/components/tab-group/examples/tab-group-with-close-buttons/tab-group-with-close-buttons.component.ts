import { Component } from "@angular/core"

export interface TabItems {
  label: string
  dataTarget: string
  prefixIcon?: string
}
@Component({
  selector: "app-tab-group-with-close-buttons",
  templateUrl: "./tab-group-with-close-buttons.component.html",
  styleUrls: ["./tab-group-with-close-buttons.component.scss"]
})
export class TabGroupWithCloseButtonsComponent {
  tabItems: TabItems[] = [
    { label: "Home", dataTarget: "nav-home", prefixIcon: "home" },
    { label: "Profile", dataTarget: "nav-profile" },
    { label: "Contact", dataTarget: "nav-contact" }
  ]
  onTabClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    console.log(customEvent.detail)
  }
}
