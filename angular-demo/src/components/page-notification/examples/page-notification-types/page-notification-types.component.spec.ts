import { ComponentFixture, TestBed } from "@angular/core/testing"

import { PageNotificationTypesComponent } from "./page-notification-types.component"

describe("PageNotificationTypesComponent", () => {
  let component: PageNotificationTypesComponent
  let fixture: ComponentFixture<PageNotificationTypesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageNotificationTypesComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(PageNotificationTypesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
