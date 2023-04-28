import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ComponentContentComponent } from "./component-content.component"

describe("ComponentContentComponent", () => {
  let component: ComponentContentComponent
  let fixture: ComponentFixture<ComponentContentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentContentComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ComponentContentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
