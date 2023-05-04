import { ComponentFixture, TestBed } from "@angular/core/testing"

import { CarouselWithButtonControlsComponent } from "./carousel-with-button-controls.component"

describe("CarouselWithButtonControlsComponent", () => {
  let component: CarouselWithButtonControlsComponent
  let fixture: ComponentFixture<CarouselWithButtonControlsComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselWithButtonControlsComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CarouselWithButtonControlsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
