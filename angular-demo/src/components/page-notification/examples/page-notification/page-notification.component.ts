import { Component } from "@angular/core"
import { VegaNotify } from "@heartlandone/vega"

@Component({
  selector: "app-page-notification",
  templateUrl: "./page-notification.component.html",
  styleUrls: ["./page-notification.component.scss"]
})
export class PageNotificationComponent {
  openNotifyWithTitle(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    VegaNotify.open({
      title: "Title",
      message:
        "This is the content of notification. This is the content of notification.This is the content of notification.This is the content of notification."
    })
  }
  openNotifyWithoutTitle(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    VegaNotify.open({
      message: "No title notification"
    })
  }
}
