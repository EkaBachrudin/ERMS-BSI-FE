import { TestBed } from '@angular/core/testing';

import { KeyProcessService } from './key-process.service';

describe('KeyProcessService', () => {
  let service: KeyProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KeyProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
