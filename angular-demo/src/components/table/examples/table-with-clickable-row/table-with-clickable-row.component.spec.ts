import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableWithClickableRowComponent } from "./table-with-clickable-row.component"

describe("TableWithClickableRowComponent", () => {
  let component: TableWithClickableRowComponent
  let fixture: ComponentFixture<TableWithClickableRowComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWithClickableRowComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableWithClickableRowComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
