import { ComponentFixture, TestBed } from "@angular/core/testing"

import { FlexCombinationComponent } from "./flex-combination.component"

describe("FlexCombinationComponent", () => {
  let component: FlexCombinationComponent
  let fixture: ComponentFixture<FlexCombinationComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexCombinationComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(FlexCombinationComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
