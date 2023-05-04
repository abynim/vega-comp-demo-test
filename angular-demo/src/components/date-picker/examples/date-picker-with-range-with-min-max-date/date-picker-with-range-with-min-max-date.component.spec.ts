import { ComponentFixture, TestBed } from "@angular/core/testing"

import { DatePickerWithRangeWithMinMaxDateComponent } from "./date-picker-with-range-with-min-max-date.component"

describe("DatePickerWithRangeWithMinMaxDateComponent", () => {
  let component: DatePickerWithRangeWithMinMaxDateComponent
  let fixture: ComponentFixture<DatePickerWithRangeWithMinMaxDateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatePickerWithRangeWithMinMaxDateComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(DatePickerWithRangeWithMinMaxDateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
