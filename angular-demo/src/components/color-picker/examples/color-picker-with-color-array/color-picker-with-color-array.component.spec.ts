import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ColorPickerWithColorArrayComponent } from "./color-picker-with-color-array.component"

describe("ColorPickerWithColorArrayComponent", () => {
  let component: ColorPickerWithColorArrayComponent
  let fixture: ComponentFixture<ColorPickerWithColorArrayComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColorPickerWithColorArrayComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ColorPickerWithColorArrayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
