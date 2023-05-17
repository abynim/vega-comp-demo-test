import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PaginationWithOrderingComponent } from "./pagination-with-ordering.component"

describe("PaginationWithOrderingComponent", () => {
  let component: PaginationWithOrderingComponent
  let fixture: ComponentFixture<PaginationWithOrderingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationWithOrderingComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PaginationWithOrderingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
