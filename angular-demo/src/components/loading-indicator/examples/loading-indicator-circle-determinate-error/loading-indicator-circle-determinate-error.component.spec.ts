import { ComponentFixture, TestBed } from "@angular/core/testing"

import { LoadingIndicatorCircleDeterminateErrorComponent } from "./loading-indicator-circle-determinate-error.component"

describe("LoadingIndicatorCircleDeterminateErrorComponent", () => {
  let component: LoadingIndicatorCircleDeterminateErrorComponent
  let fixture: ComponentFixture<LoadingIndicatorCircleDeterminateErrorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorCircleDeterminateErrorComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingIndicatorCircleDeterminateErrorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
