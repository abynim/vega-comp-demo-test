import { Component } from "@angular/core"

@Component({
  selector: "app-tab-group-with-close-buttons",
  templateUrl: "./tab-group-with-close-buttons.component.html",
  styleUrls: ["./tab-group-with-close-buttons.component.scss"]
})
export class TabGroupWithCloseButtonsComponent {
  onTabClick(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    console.log(customEvent.detail)
  }
}
