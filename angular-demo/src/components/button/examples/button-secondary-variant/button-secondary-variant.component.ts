import { Component } from "@angular/core"

@Component({
  selector: "app-button-secondary-variant",
  templateUrl: "./button-secondary-variant.component.html",
  styleUrls: ["./button-secondary-variant.component.scss"]
})
export class ButtonSecondaryVariantComponent {
  onClick(e: Event) {
    const button: HTMLVegaButtonElement = e.target as HTMLVegaButtonElement
  }
}
