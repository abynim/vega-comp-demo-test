import { Component, ViewChild } from "@angular/core"

@Component({
  selector: "app-combo-box-with-creatable-options",
  templateUrl: "./combo-box-with-creatable-options.component.html",
  styleUrls: ["./combo-box-with-creatable-options.component.scss"]
})
export class ComboBoxWithCreatableOptionsComponent {
  onCreate(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent<any>
    const comboBox: HTMLVegaComboBoxElement = e.target as HTMLVegaComboBoxElement
    const value = customEvent.detail

    comboBox.source.push({ key: value, label: value })
    comboBox.value = [...comboBox.value, value]
  }
}
