import { Component, OnInit, ViewChild, AfterViewInit } from "@angular/core"

@Component({
  selector: "app-loading-indicator-circle-determinate-success",
  templateUrl: "./loading-indicator-circle-determinate-success.component.html",
  styleUrls: ["./loading-indicator-circle-determinate-success.component.scss"]
})
export class LoadingIndicatorCircleDeterminateSuccessComponent implements OnInit, AfterViewInit {
  constructor() {}
  percentage = 0
  @ViewChild("successLoader") successLoader!: HTMLVegaLoadingIndicatorElement

  simulatePercentage() {
    const successLoaderElement = this.successLoader
    successLoaderElement.percent = 0
    this.percentage = 0
    const successLoaderTimer = setInterval(() => {
      if (successLoaderElement.percent < 100) {
        successLoaderElement.percent += 1
        successLoaderElement.label = `${successLoaderElement.percent}%`
      } else {
        successLoaderElement.status = "success"
        successLoaderElement.label = "Success"
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
