import { TestBed } from '@angular/core/testing';

import { UtenteiscrizioneService } from './utenteiscrizione.service';

describe('UtenteiscrizioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtenteiscrizioneService = TestBed.get(UtenteiscrizioneService);
    expect(service).toBeTruthy();
  });
});
