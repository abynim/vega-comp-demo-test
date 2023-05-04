import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TabGroupWithCloseButtonsComponent } from "./tab-group-with-close-buttons.component"

describe("TabGroupWithCloseButtonsComponent", () => {
  let component: TabGroupWithCloseButtonsComponent
  let fixture: ComponentFixture<TabGroupWithCloseButtonsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGroupWithCloseButtonsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TabGroupWithCloseButtonsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
