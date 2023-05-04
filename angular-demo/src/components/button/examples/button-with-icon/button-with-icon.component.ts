import { Component } from "@angular/core"

@Component({
  selector: "app-button-with-icon",
  templateUrl: "./button-with-icon.component.html",
  styleUrls: ["./button-with-icon.component.scss"]
})
export class ButtonWithIconComponent {
  onClick(e: Event) {
    const button: HTMLVegaButtonElement = e.target as HTMLVegaButtonElement
  }
}
