import { ComponentFixture, TestBed } from "@angular/core/testing"

import { LoadingIndicatorBarDeterminateComponent } from "./loading-indicator-bar-determinate.component"

describe("LoadingIndicatorBarDeterminateComponent", () => {
  let component: LoadingIndicatorBarDeterminateComponent
  let fixture: ComponentFixture<LoadingIndicatorBarDeterminateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorBarDeterminateComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingIndicatorBarDeterminateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
