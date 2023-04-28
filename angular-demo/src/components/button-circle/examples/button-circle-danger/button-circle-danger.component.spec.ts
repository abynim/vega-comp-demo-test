import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonCircleDangerComponent } from "./button-circle-danger.component"

describe("ButtonCircleDangerComponent", () => {
  let component: ButtonCircleDangerComponent
  let fixture: ComponentFixture<ButtonCircleDangerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonCircleDangerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonCircleDangerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
