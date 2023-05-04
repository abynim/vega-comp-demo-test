import { Component } from "@angular/core"

@Component({
  selector: "app-tab-group",
  templateUrl: "./tab-group.component.html",
  styleUrls: ["./tab-group.component.scss"]
})
export class TabGroupComponent {
  onTabClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    console.log(customEvent.detail)
  }
}
