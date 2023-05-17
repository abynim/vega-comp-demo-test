import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableDensityCompactComponent } from "./table-density-compact.component"

describe("TableDensityCompactComponent", () => {
  let component: TableDensityCompactComponent
  let fixture: ComponentFixture<TableDensityCompactComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDensityCompactComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableDensityCompactComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
