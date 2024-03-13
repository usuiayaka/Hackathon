import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchShelterComponent } from './search-shelter.component';

describe('SearchShelterComponent', () => {
  let component: SearchShelterComponent;
  let fixture: ComponentFixture<SearchShelterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchShelterComponent]
    });
    fixture = TestBed.createComponent(SearchShelterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
