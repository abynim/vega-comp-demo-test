import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableWithPaginationAndDividersComponent } from "./table-with-pagination-and-dividers.component"

describe("TableWithPaginationAndDividersComponent", () => {
  let component: TableWithPaginationAndDividersComponent
  let fixture: ComponentFixture<TableWithPaginationAndDividersComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWithPaginationAndDividersComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableWithPaginationAndDividersComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
