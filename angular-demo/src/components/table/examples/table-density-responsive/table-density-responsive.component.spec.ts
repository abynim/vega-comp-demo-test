import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableDensityResponsiveComponent } from "./table-density-responsive.component"

describe("TableDensityResponsiveComponent", () => {
  let component: TableDensityResponsiveComponent
  let fixture: ComponentFixture<TableDensityResponsiveComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableDensityResponsiveComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableDensityResponsiveComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
