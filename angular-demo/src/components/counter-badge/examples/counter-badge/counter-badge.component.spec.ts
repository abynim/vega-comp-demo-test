import { ComponentFixture, TestBed } from "@angular/core/testing"

import { CounterBadgeComponent } from "./counter-badge.component"

describe("CounterBadgeComponent", () => {
  let component: CounterBadgeComponent
  let fixture: ComponentFixture<CounterBadgeComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterBadgeComponent]
    }).compileComponents()

    fixture = TestBed.createComponent(CounterBadgeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it("should create", () => {
    expect(component).toBeTruthy()
  })
})
