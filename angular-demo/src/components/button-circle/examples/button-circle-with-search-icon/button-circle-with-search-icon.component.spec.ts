import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonCircleWithSearchIconComponent } from "./button-circle-with-search-icon.component"

describe("ButtonCircleWithSearchIconComponent", () => {
  let component: ButtonCircleWithSearchIconComponent
  let fixture: ComponentFixture<ButtonCircleWithSearchIconComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCircleWithSearchIconComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonCircleWithSearchIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
