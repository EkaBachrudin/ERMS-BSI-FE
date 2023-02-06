import { TestBed } from '@angular/core/testing';

import { KeyControlService } from './key-control.service';

describe('KeyControlService', () => {
  let service: KeyControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
