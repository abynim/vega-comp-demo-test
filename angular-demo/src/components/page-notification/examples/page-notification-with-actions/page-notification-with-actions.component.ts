import { Component } from "@angular/core"
import { VegaNotify } from "@heartlandone/vega"

@Component({
  selector: "app-page-notification-with-actions",
  templateUrl: "./page-notification-with-actions.component.html",
  styleUrls: ["./page-notification-with-actions.component.scss"]
})
export class PageNotificationWithActionsComponent {
  async openNotifyWithAction(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const id = await VegaNotify.open({
      title: "Title",
      duration: 0,
      message: "This notification will not be closed, because the duration is set 0",
      actionButtons: [
        {
          label: "Confirm",
          onVegaClick: () => {
            VegaNotify.close(id)
          }
        }
      ]
    })
  }

  async openNotifyWithActions(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const id = await VegaNotify.open({
      title: "Title",
      duration: 10000,
      message: `This notification will close after 10s`,
      actionButtons: [
        {
          label: "Cancel",
          onVegaClick: () => {
            VegaNotify.close(id)
          }
        },
        {
          label: "OK",
          onVegaClick: () => {
            VegaNotify.close(id)
          }
        }
      ]
    })
  }
}
