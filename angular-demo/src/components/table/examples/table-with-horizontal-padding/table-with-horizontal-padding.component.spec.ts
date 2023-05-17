import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableWithHorizontalPaddingComponent } from "./table-with-horizontal-padding.component"

describe("TableWithHorizontalPaddingComponent", () => {
  let component: TableWithHorizontalPaddingComponent
  let fixture: ComponentFixture<TableWithHorizontalPaddingComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableWithHorizontalPaddingComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableWithHorizontalPaddingComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
