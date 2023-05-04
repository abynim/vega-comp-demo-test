import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ItemToggleComponent } from "./item-toggle.component"

describe("ItemToggleComponent", () => {
  let component: ItemToggleComponent
  let fixture: ComponentFixture<ItemToggleComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemToggleComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ItemToggleComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
