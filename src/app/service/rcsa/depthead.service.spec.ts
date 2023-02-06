import { TestBed } from '@angular/core/testing';

import { DeptheadService } from './depthead.service';

describe('DeptheadService', () => {
  let service: DeptheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
