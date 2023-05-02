import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonLinkDangerComponent } from "./button-link-danger.component"

describe("ButtonLinkDangerComponent", () => {
  let component: ButtonLinkDangerComponent
  let fixture: ComponentFixture<ButtonLinkDangerComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLinkDangerComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonLinkDangerComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
