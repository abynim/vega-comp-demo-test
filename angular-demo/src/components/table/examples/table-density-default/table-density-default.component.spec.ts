import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableDensityDefaultComponent } from "./table-density-default.component"

describe("TableDensityDefaultComponent", () => {
  let component: TableDensityDefaultComponent
  let fixture: ComponentFixture<TableDensityDefaultComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDensityDefaultComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableDensityDefaultComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
