import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PageNotificationWithActionsComponent } from "./page-notification-with-actions.component"

describe("PageNotificationWithActionsComponent", () => {
  let component: PageNotificationWithActionsComponent
  let fixture: ComponentFixture<PageNotificationWithActionsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotificationWithActionsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PageNotificationWithActionsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
