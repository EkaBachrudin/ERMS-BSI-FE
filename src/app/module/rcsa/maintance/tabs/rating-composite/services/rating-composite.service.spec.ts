import { TestBed } from '@angular/core/testing';

import { RatingCompositeService } from './rating-composite.service';

describe('RatingCompositeService', () => {
  let service: RatingCompositeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RatingCompositeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
