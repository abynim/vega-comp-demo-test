import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core"

@Component({
  selector: "app-loading-indicator-circle-determinate-error",
  templateUrl: "./loading-indicator-circle-determinate-error.component.html",
  styleUrls: ["./loading-indicator-circle-determinate-error.component.scss"]
})
export class LoadingIndicatorCircleDeterminateErrorComponent implements OnInit, AfterViewInit {
  constructor() {}
  percentage = 0
  @ViewChild("errorLoader") errorLoader!: HTMLVegaLoadingIndicatorElement

  simulatePercentage() {
    const errorLoaderElement = this.errorLoader
    errorLoaderElement.percent = 0
    this.percentage = 0
    const successLoaderTimer = setInterval(() => {
      if (errorLoaderElement.percent < 80) {
        errorLoaderElement.percent += 1
        errorLoaderElement.label = `${errorLoaderElement.percent}%`
      } else {
        errorLoaderElement.status = "error"
        errorLoaderElement.label = "Error"
        clearInterval(successLoaderTimer)
      }
    }, 30)
  }
  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.simulatePercentage()
    }, 1000)
  }
}
