import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TableEditableComplexComponent } from "./table-editable-complex.component"

describe("TableEditableComplexComponent", () => {
  let component: TableEditableComplexComponent
  let fixture: ComponentFixture<TableEditableComplexComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableEditableComplexComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TableEditableComplexComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
