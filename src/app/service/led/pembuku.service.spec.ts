import { TestBed } from '@angular/core/testing';

import { PembukuService } from './pembuku.service';

describe('PembukuService', () => {
  let service: PembukuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PembukuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
