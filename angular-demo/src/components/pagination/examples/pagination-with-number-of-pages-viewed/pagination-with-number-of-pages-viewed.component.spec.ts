import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PaginationWithNumberOfPagesViewedComponent } from "./pagination-with-number-of-pages-viewed.component"

describe("PaginationWithNumberOfPagesViewedComponent", () => {
  let component: PaginationWithNumberOfPagesViewedComponent
  let fixture: ComponentFixture<PaginationWithNumberOfPagesViewedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PaginationWithNumberOfPagesViewedComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PaginationWithNumberOfPagesViewedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
