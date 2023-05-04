import { ComponentFixture, TestBed } from "@angular/core/testing"

import { LoadingIndicatorCircleDeterminateSuccessComponent } from "./loading-indicator-circle-determinate-success.component"

describe("LoadingIndicatorCircleDeterminateSuccessComponent", () => {
  let component: LoadingIndicatorCircleDeterminateSuccessComponent
  let fixture: ComponentFixture<LoadingIndicatorCircleDeterminateSuccessComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingIndicatorCircleDeterminateSuccessComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(LoadingIndicatorCircleDeterminateSuccessComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
