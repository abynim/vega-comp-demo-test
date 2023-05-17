import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableOverflowColumnsWithEllipsisComponent } from "./table-overflow-columns-with-ellipsis.component"

describe("TableOverflowColumnsWithEllipsisComponent", () => {
  let component: TableOverflowColumnsWithEllipsisComponent
  let fixture: ComponentFixture<TableOverflowColumnsWithEllipsisComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableOverflowColumnsWithEllipsisComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableOverflowColumnsWithEllipsisComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
