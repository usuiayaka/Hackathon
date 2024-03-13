import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SukagawaComponent } from './sukagawa.component';

describe('SukagawaComponent', () => {
  let component: SukagawaComponent;
  let fixture: ComponentFixture<SukagawaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SukagawaComponent]
    });
    fixture = TestBed.createComponent(SukagawaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
