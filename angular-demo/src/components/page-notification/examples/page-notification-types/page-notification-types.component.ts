import { Component } from "@angular/core"
import { VegaNotify } from "@heartlandone/vega"
import { VegaPageNotificationTypes } from "@heartlandone/vega/dist/types/components/vega-page-notification/vega-page-notification"

@Component({
  selector: "app-page-notification-types",
  templateUrl: "./page-notification-types.component.html",
  styleUrls: ["./page-notification-types.component.scss"]
})
export class PageNotificationTypesComponent {
  openNotify(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    const button: HTMLVegaButtonElement = customEvent.target as HTMLVegaButtonElement

    const type = button.id
    const text = button.textContent as string
    const params = {
      type: type as VegaPageNotificationTypes,
      message: `${text.toUpperCase()}`
    }
    VegaNotify.open(params)
  }
}
