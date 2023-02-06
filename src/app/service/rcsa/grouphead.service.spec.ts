import { TestBed } from '@angular/core/testing';

import { GroupheadService } from './grouphead.service';

describe('GroupheadService', () => {
  let service: GroupheadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroupheadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
