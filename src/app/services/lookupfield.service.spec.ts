import { TestBed } from '@angular/core/testing';

import { LookupfieldService } from './lookupfield.service';

describe('LookupfieldService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LookupfieldService = TestBed.get(LookupfieldService);
    expect(service).toBeTruthy();
  });
});
