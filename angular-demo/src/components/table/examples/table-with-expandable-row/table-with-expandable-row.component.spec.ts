import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableWithExpandableRowComponent } from "./table-with-expandable-row.component"

describe("TableWithExpandableRowComponent", () => {
  let component: TableWithExpandableRowComponent
  let fixture: ComponentFixture<TableWithExpandableRowComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWithExpandableRowComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableWithExpandableRowComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
