import { Component } from "@angular/core"

@Component({
  selector: "app-tab-group-with-overflow-tabs",
  templateUrl: "./tab-group-with-overflow-tabs.component.html",
  styleUrls: ["./tab-group-with-overflow-tabs.component.scss"]
})
export class TabGroupWithOverflowTabsComponent {
  onTabClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    console.log(customEvent.detail)
  }
}
