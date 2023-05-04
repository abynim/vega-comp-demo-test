import { Component } from "@angular/core"

@Component({
  selector: "app-button-circle",
  templateUrl: "./button-circle.component.html",
  styleUrls: ["./button-circle.component.scss"]
})
export class ButtonCircleComponent {
  onClick(e: Event) {
    const button: HTMLVegaButtonCircleElement = e.target as HTMLVegaButtonCircleElement
  }
}
