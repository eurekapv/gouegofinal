import { TestBed } from '@angular/core/testing';

import { CodicefiscaleService } from './codicefiscale.service';

describe('CodicefiscaleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodicefiscaleService = TestBed.get(CodicefiscaleService);
    expect(service).toBeTruthy();
  });
});
