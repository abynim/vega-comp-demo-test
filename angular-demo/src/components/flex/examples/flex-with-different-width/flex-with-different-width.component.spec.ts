import { ComponentFixture, TestBed } from "@angular/core/testing"

import { FlexWithDifferentWidthComponent } from "./flex-with-different-width.component"

describe("FlexWithDifferentWidthComponent", () => {
  let component: FlexWithDifferentWidthComponent
  let fixture: ComponentFixture<FlexWithDifferentWidthComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexWithDifferentWidthComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(FlexWithDifferentWidthComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
