import { TestBed } from '@angular/core/testing';

import { CurrentPositionService } from './current-position.service';

describe('CurrentPositionService', () => {
  let service: CurrentPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
