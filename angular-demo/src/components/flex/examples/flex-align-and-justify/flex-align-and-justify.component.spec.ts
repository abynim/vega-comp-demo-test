import { ComponentFixture, TestBed } from "@angular/core/testing"

import { FlexAlignAndJustifyComponent } from "./flex-align-and-justify.component"

describe("FlexAlignAndJustifyComponent", () => {
  let component: FlexAlignAndJustifyComponent
  let fixture: ComponentFixture<FlexAlignAndJustifyComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexAlignAndJustifyComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(FlexAlignAndJustifyComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
