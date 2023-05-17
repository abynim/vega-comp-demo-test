import { Component } from "@angular/core"

export interface TabItems {
  label: string
  dataTarget: string
  prefixIcon?: string
}
@Component({
  selector: "app-tab-group-with-overflow-tabs",
  templateUrl: "./tab-group-with-overflow-tabs.component.html",
  styleUrls: ["./tab-group-with-overflow-tabs.component.scss"]
})
export class TabGroupWithOverflowTabsComponent {
  tabItems: TabItems[] = [
    { label: "Home", dataTarget: "nav-home", prefixIcon: "home" },
    { label: "Profile", dataTarget: "nav-profile" },
    { label: "Contact", dataTarget: "nav-contact" },
    { label: "Contact2", dataTarget: "nav-contact4" },
    { label: "Contact3", dataTarget: "nav-contact5" },
    { label: "Contact4", dataTarget: "nav-contact6" },
    { label: "Contact5", dataTarget: "nav-contact7" },
    { label: "Contact6", dataTarget: "nav-contact8" },
    { label: "Contact7", dataTarget: "nav-contact9" },
    { label: "Contact8", dataTarget: "nav-contact10" }
  ]
  onTabClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    console.log(customEvent.detail)
  }
}
