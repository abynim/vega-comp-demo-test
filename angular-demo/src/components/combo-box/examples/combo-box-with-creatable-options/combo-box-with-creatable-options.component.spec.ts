import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ComboBoxWithCreatableOptionsComponent } from "./combo-box-with-creatable-options.component"

describe("ComboBoxWithCreatableOptionsComponent", () => {
  let component: ComboBoxWithCreatableOptionsComponent
  let fixture: ComponentFixture<ComboBoxWithCreatableOptionsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ComboBoxWithCreatableOptionsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ComboBoxWithCreatableOptionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
