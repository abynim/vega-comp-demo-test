import { NgModule } from "@angular/core"

import { Component, OnInit } from "@angular/core"
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: "app-components",
  templateUrl: "./components.component.html",
  styleUrls: ["./components.component.scss"]
})
export class ComponentsComponent implements OnInit {
  activeComponent!: string
  constructor(private activatedRoute: ActivatedRoute) {
    const params = this.activatedRoute.snapshot.params
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params) => {
      const activeComponent = params.get("component")
      this.activeComponent = activeComponent!
    })
  }
}
