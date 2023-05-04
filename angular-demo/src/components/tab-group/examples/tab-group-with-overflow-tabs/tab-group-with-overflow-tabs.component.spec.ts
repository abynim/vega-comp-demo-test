import { ComponentFixture, TestBed } from "@angular/core/testing"

import { TabGroupWithOverflowTabsComponent } from "./tab-group-with-overflow-tabs.component"

describe("TabGroupWithOverflowTabsComponent", () => {
  let component: TabGroupWithOverflowTabsComponent
  let fixture: ComponentFixture<TabGroupWithOverflowTabsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabGroupWithOverflowTabsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(TabGroupWithOverflowTabsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
