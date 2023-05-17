import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableDensityRelaxedComponent } from "./table-density-relaxed.component"

describe("TableDensityRelaxedComponent", () => {
  let component: TableDensityRelaxedComponent
  let fixture: ComponentFixture<TableDensityRelaxedComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDensityRelaxedComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableDensityRelaxedComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
