import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EarthquakeComponent } from './earthquake.component';

describe('EarthquakeComponent', () => {
  let component: EarthquakeComponent;
  let fixture: ComponentFixture<EarthquakeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EarthquakeComponent],
    });
    fixture = TestBed.createComponent(EarthquakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
