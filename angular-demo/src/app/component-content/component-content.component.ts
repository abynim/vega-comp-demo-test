import { Component, Input } from "@angular/core"

@Component({
  selector: "app-component-content",
  templateUrl: "./component-content.component.html",
  styleUrls: ["./component-content.component.scss"]
})
export class ComponentContentComponent {
  @Input() title!: string
}
