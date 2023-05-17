import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PaginationWithVariableItemNumberDisplayComponent } from "./pagination-with-variable-item-number-display.component"

describe("PaginationWithVariableItemNumberDisplayComponent", () => {
  let component: PaginationWithVariableItemNumberDisplayComponent
  let fixture: ComponentFixture<PaginationWithVariableItemNumberDisplayComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationWithVariableItemNumberDisplayComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PaginationWithVariableItemNumberDisplayComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
