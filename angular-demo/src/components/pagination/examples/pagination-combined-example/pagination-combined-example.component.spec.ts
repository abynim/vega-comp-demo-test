import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PaginationCombinedExampleComponent } from "./pagination-combined-example.component"

describe("PaginationCombinedExampleComponent", () => {
  let component: PaginationCombinedExampleComponent
  let fixture: ComponentFixture<PaginationCombinedExampleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationCombinedExampleComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PaginationCombinedExampleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
