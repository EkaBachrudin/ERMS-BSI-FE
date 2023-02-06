import { TestBed } from '@angular/core/testing';

import { LikeHoodService } from './like-hood.service';

describe('LikeHoodService', () => {
  let service: LikeHoodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LikeHoodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
