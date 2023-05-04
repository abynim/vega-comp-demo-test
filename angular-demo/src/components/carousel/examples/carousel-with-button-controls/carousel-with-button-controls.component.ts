import { Component, ViewChild } from "@angular/core"

@Component({
  selector: "app-carousel-with-button-controls",
  templateUrl: "./carousel-with-button-controls.component.html",
  styleUrls: ["./carousel-with-button-controls.component.scss"]
})
export class CarouselWithButtonControlsComponent {
  @ViewChild("carousel") carousel!: HTMLVegaCarouselElement
  goToPreviousPage(e: Event) {
    const previousButton: HTMLVegaButtonCircleElement = e.target as HTMLVegaButtonCircleElement
    this.carousel.prevPage()
  }
  goToNextPage(e: Event) {
    const nextButton: HTMLVegaButtonCircleElement = e.target as HTMLVegaButtonCircleElement
    this.carousel.nextPage()
  }
}
