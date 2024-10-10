import { TestBed } from '@angular/core/testing';

import { StripemanagerService } from './stripemanager.service';

describe('StripemanagerService', () => {
  let service: StripemanagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StripemanagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
