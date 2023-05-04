import { ComponentFixture, TestBed } from "@angular/core/testing"

import { CounterBadgeWithDotComponent } from "./counter-badge-with-dot.component"

describe("CounterBadgeWithDotComponent", () => {
  let component: CounterBadgeWithDotComponent
  let fixture: ComponentFixture<CounterBadgeWithDotComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterBadgeWithDotComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CounterBadgeWithDotComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
