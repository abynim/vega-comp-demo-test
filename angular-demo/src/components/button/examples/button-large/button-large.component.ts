import { Component } from "@angular/core"

@Component({
  selector: "app-button-large",
  templateUrl: "./button-large.component.html",
  styleUrls: ["./button-large.component.scss"]
})
export class ButtonLargeComponent {
  onClick(e: Event) {
    const button: HTMLVegaButtonElement = e.target as HTMLVegaButtonElement
  }
}
