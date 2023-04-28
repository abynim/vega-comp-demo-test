import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ComponentSubContentComponent } from "./component-sub-content.component"

describe("ComponentSubContentComponent", () => {
  let component: ComponentSubContentComponent
  let fixture: ComponentFixture<ComponentSubContentComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComponentSubContentComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ComponentSubContentComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
