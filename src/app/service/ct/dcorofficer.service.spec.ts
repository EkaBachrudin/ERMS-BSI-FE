import { TestBed } from '@angular/core/testing';

import { DcorofficerService } from './dcorofficer.service';

describe('DcorofficerService', () => {
  let service: DcorofficerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcorofficerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
