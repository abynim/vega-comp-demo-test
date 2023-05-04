import { Component } from "@angular/core"

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"]
})
export class ModalComponent {
  isOpen = false

  openModal(e: Event) {
    this.isOpen = true
  }
  closeModal(e: Event) {
    this.isOpen = false
  }
}
