import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonLinkWithIconComponent } from "./button-link-with-icon.component"

describe("ButtonLinkWithIconComponent", () => {
  let component: ButtonLinkWithIconComponent
  let fixture: ComponentFixture<ButtonLinkWithIconComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonLinkWithIconComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonLinkWithIconComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
