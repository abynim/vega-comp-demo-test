import { ComponentFixture, TestBed } from "@angular/core/testing"

import { AppFooterWithAdditionalLinksComponent } from "./app-footer-with-additional-links.component"

describe("AppFooterWithAdditionalLinksComponent", () => {
  let component: AppFooterWithAdditionalLinksComponent
  let fixture: ComponentFixture<AppFooterWithAdditionalLinksComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppFooterWithAdditionalLinksComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(AppFooterWithAdditionalLinksComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
