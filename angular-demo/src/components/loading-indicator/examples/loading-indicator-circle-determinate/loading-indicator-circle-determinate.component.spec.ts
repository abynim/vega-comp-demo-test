import { ComponentFixture, TestBed } from "@angular/core/testing"

import { LoadingIndicatorCircleDeterminateComponent } from "./loading-indicator-circle-determinate.component"

describe("LoadingIndicatorCircleDeterminateComponent", () => {
  let component: LoadingIndicatorCircleDeterminateComponent
  let fixture: ComponentFixture<LoadingIndicatorCircleDeterminateComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorCircleDeterminateComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingIndicatorCircleDeterminateComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
