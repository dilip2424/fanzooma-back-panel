import { TestBed } from '@angular/core/testing';

import { SubAccountService } from './sub-account.service';

describe('SubAccountService', () => {
  let service: SubAccountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubAccountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
