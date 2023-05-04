import { Component, ViewChild } from "@angular/core"

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"]
})
export class FormComponent {
  @ViewChild("form") form!: HTMLVegaFormElement

  async getValue(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    window.alert(JSON.stringify(await this.form.getValue(), null, 2))
  }
  validate(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    this.form.valid()
  }
  reset(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent
    this.form.reset()
  }
}
