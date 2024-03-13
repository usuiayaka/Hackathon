import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UesrComponent } from './uesr.component';

describe('UesrComponent', () => {
  let component: UesrComponent;
  let fixture: ComponentFixture<UesrComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UesrComponent]
    });
    fixture = TestBed.createComponent(UesrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
