import { Component } from "@angular/core"

export interface TabItems {
  label: string
  dataTarget: string
  prefixIcon?: string
}
@Component({
  selector: "app-tab-group",
  templateUrl: "./tab-group.component.html",
  styleUrls: ["./tab-group.component.scss"]
})
export class TabGroupComponent {
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
