import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ProgressTrackerHorizontalComponent } from "./progress-tracker-horizontal.component"

describe("ProgressTrackerHorizontalComponent", () => {
  let component: ProgressTrackerHorizontalComponent
  let fixture: ComponentFixture<ProgressTrackerHorizontalComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProgressTrackerHorizontalComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ProgressTrackerHorizontalComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
