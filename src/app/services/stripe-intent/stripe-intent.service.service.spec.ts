import { TestBed } from '@angular/core/testing';

import { StripeIntentServiceService } from './stripe-intent.service.service';

describe('StripeIntentServiceService', () => {
  let service: StripeIntentServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StripeIntentServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
