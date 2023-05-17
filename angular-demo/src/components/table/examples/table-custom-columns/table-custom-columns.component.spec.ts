import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableCustomColumnsComponent } from "./table-custom-columns.component"

describe("TableCustomColumnsComponent", () => {
  let component: TableCustomColumnsComponent
  let fixture: ComponentFixture<TableCustomColumnsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCustomColumnsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableCustomColumnsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
