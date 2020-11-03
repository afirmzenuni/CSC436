import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightPriceComponent } from './flight-price.component';

describe('FlightPriceComponent', () => {
  let component: FlightPriceComponent;
  let fixture: ComponentFixture<FlightPriceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightPriceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
