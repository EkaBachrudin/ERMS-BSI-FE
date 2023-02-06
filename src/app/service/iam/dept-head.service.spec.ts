import { TestBed } from '@angular/core/testing';

import { DeptHeadService } from './dept-head.service';

describe('DeptHeadService', () => {
  let service: DeptHeadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeptHeadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
