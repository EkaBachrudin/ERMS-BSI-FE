import { TestBed } from '@angular/core/testing';

import { KeyRiskService } from './key-risk.service';

describe('KeyRiskService', () => {
  let service: KeyRiskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyRiskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
