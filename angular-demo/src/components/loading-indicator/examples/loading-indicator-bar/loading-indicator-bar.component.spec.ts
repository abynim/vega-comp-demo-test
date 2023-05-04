import { ComponentFixture, TestBed } from "@angular/core/testing"

import { LoadingIndicatorBarComponent } from "./loading-indicator-bar.component"

describe("LoadingIndicatorBarComponent", () => {
  let component: LoadingIndicatorBarComponent
  let fixture: ComponentFixture<LoadingIndicatorBarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorBarComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingIndicatorBarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
