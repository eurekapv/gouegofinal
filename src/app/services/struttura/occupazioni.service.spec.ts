import { TestBed } from '@angular/core/testing';

import { OccupazioniService } from './occupazioni.service';

describe('OccupazioniService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OccupazioniService = TestBed.get(OccupazioniService);
    expect(service).toBeTruthy();
  });
});
