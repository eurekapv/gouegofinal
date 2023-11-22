import { TestBed } from '@angular/core/testing';

import { UtenteprenotazioneService } from './utenteprenotazione.service';

describe('UtenteprenotazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UtenteprenotazioneService = TestBed.get(UtenteprenotazioneService);
    expect(service).toBeTruthy();
  });
});
