import { Component } from "@angular/core"

@Component({
  selector: "app-color-picker-with-color-array",
  templateUrl: "./color-picker-with-color-array.component.html",
  styleUrls: ["./color-picker-with-color-array.component.scss"]
})
export class ColorPickerWithColorArrayComponent {
  color = "#73E6DC"
  onColorPickerChange(e: Event) {
    const colorPicker: HTMLVegaColorPickerElement = e.target as HTMLVegaColorPickerElement
    this.color = colorPicker.value
  }
}
