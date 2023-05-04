import { Component } from "@angular/core"

@Component({
  selector: "app-color-picker",
  templateUrl: "./color-picker.component.html",
  styleUrls: ["./color-picker.component.scss"]
})
export class ColorPickerComponent {
  color = "#73E6DC"
  onColorPickerChange(e: Event) {
    const colorPicker: HTMLVegaColorPickerElement = e.target as HTMLVegaColorPickerElement
    this.color = colorPicker.value
  }
}
