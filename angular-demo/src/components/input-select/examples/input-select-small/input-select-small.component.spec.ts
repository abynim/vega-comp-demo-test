import { ComponentFixture, TestBed } from "@angular/core/testing"

import { InputSelectSmallComponent } from "./input-select-small.component"

describe("InputSelectSmallComponent", () => {
  let component: InputSelectSmallComponent
  let fixture: ComponentFixture<InputSelectSmallComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputSelectSmallComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InputSelectSmallComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
