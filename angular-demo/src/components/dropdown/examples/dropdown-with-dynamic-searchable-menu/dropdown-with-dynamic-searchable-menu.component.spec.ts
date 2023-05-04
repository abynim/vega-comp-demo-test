import { ComponentFixture, TestBed } from "@angular/core/testing"

import { DropdownWithDynamicSearchableMenuComponent } from "./dropdown-with-dynamic-searchable-menu.component"

describe("DropdownWithDynamicSearchableMenuComponent", () => {
  let component: DropdownWithDynamicSearchableMenuComponent
  let fixture: ComponentFixture<DropdownWithDynamicSearchableMenuComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DropdownWithDynamicSearchableMenuComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(DropdownWithDynamicSearchableMenuComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
