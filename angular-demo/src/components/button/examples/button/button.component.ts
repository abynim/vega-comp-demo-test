import { Component } from "@angular/core"

@Component({
  selector: "app-button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.scss"]
})
export class ButtonComponent {
  onClick(e: Event) {
    const button: HTMLVegaButtonElement = e.target as HTMLVegaButtonElement
  }
}
