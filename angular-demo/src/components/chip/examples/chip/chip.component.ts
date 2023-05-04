import { Component, ViewChild } from "@angular/core"

@Component({
  selector: "app-chip",
  templateUrl: "./chip.component.html",
  styleUrls: ["./chip.component.scss"]
})
export class ChipComponent {
  @ViewChild("chip") chip!: HTMLVegaChipElement
  closeChip() {
    console.log(this.chip)
    this.chip.remove()
  }
}
