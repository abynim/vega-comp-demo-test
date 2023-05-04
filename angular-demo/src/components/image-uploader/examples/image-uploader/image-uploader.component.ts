import { Component, ViewChild } from "@angular/core"

@Component({
  selector: "app-image-uploader",
  templateUrl: "./image-uploader.component.html",
  styleUrls: ["./image-uploader.component.scss"]
})
export class ImageUploaderComponent {
  @ViewChild("uploader") uploader!: HTMLVegaImageUploaderElement
  async onChange(e: Event) {
    const customEvent: CustomEvent = e as CustomEvent

    if (customEvent.detail) {
      this.uploader.status = "uploading"
      setTimeout(() => {
        this.uploader.status = "done"
      }, 3000)
    }
  }
}
