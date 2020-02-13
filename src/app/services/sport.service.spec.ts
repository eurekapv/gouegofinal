import { TestBed } from '@angular/core/testing';

import { SportService } from './sport.service';

describe('AttivitaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SportService = TestBed.get(SportService);
    expect(service).toBeTruthy();
  });
});
