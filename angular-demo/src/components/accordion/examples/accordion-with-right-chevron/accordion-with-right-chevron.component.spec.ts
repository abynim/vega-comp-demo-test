import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AccordionWithRightChevronComponent } from "./accordion-with-right-chevron.component"

describe("AccordionWithRightChevronComponent", () => {
  let component: AccordionWithRightChevronComponent
  let fixture: ComponentFixture<AccordionWithRightChevronComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionWithRightChevronComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AccordionWithRightChevronComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
