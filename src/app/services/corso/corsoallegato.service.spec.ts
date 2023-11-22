import { TestBed } from '@angular/core/testing';

import { CorsoallegatoService } from './corsoallegato.service';

describe('CorsoallegatoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorsoallegatoService = TestBed.get(CorsoallegatoService);
    expect(service).toBeTruthy();
  });
});
