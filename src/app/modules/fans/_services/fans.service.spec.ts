import { TestBed } from '@angular/core/testing';

import { FansService } from './fans.service';

describe('FansService', () => {
  let service: FansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
