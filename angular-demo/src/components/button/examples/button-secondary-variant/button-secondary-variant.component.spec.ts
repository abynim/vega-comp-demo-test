import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ButtonSecondaryVariantComponent } from "./button-secondary-variant.component"

describe("ButtonSecondaryVariantComponent", () => {
  let component: ButtonSecondaryVariantComponent
  let fixture: ComponentFixture<ButtonSecondaryVariantComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSecondaryVariantComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ButtonSecondaryVariantComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
