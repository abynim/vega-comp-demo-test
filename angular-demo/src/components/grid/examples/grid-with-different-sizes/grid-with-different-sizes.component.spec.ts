import { ComponentFixture, TestBed } from "@angular/core/testing"

import { GridWithDifferentSizesComponent } from "./grid-with-different-sizes.component"

describe("GridWithDifferentSizesComponent", () => {
  let component: GridWithDifferentSizesComponent
  let fixture: ComponentFixture<GridWithDifferentSizesComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GridWithDifferentSizesComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(GridWithDifferentSizesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
