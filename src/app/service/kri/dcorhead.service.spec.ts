import { TestBed } from '@angular/core/testing';

import { DcorheadService } from './dcorhead.service';

describe('DcorheadService', () => {
  let service: DcorheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DcorheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
