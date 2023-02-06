import { TestBed } from '@angular/core/testing';

import { IhrrService } from './ihrr.service';

describe('IhrrService', () => {
  let service: IhrrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IhrrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
