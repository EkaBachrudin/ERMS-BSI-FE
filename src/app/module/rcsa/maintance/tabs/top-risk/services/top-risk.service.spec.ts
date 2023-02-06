import { TestBed } from '@angular/core/testing';

import { TopRiskService } from './top-risk.service';

describe('TopRiskService', () => {
  let service: TopRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
