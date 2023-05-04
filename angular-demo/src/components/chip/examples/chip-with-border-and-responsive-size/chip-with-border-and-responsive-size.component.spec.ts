import { ComponentFixture, TestBed } from "@angular/core/testing"

import { ChipWithBorderAndResponsiveSizeComponent } from "./chip-with-border-and-responsive-size.component"

describe("ChipWithBorderAndResponsiveSizeComponent", () => {
  let component: ChipWithBorderAndResponsiveSizeComponent
  let fixture: ComponentFixture<ChipWithBorderAndResponsiveSizeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChipWithBorderAndResponsiveSizeComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(ChipWithBorderAndResponsiveSizeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
