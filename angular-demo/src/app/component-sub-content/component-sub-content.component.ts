import { Component, Input } from "@angular/core"

@Component({
  selector: "app-component-sub-content",
  templateUrl: "./component-sub-content.component.html",
  styleUrls: ["./component-sub-content.component.scss"]
})
export class ComponentSubContentComponent {
  @Input() subTitle!: string
  @Input() background!: boolean
}
