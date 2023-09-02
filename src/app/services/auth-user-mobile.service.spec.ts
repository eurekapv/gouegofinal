import { TestBed } from '@angular/core/testing';

import { AuthUserMobileService } from './auth-user-mobile.service';

describe('AuthUserMobileService', () => {
  let service: AuthUserMobileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthUserMobileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
