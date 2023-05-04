import { ComponentFixture, TestBed } from "@angular/core/testing"

import { InputCreditCardComponent } from "./input-credit-card.component"

describe("InputCreditCardComponent", () => {
  let component: InputCreditCardComponent
  let fixture: ComponentFixture<InputCreditCardComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputCreditCardComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(InputCreditCardComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
