import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EluptionComponent } from './eluption.component';

describe('EluptionComponent', () => {
  let component: EluptionComponent;
  let fixture: ComponentFixture<EluptionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EluptionComponent]
    });
    fixture = TestBed.createComponent(EluptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
