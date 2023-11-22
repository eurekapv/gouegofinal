import { TestBed } from '@angular/core/testing';

import { CorsoValutazioneService } from './corso-valutazione.service';

describe('CorsoValutazioneService', () => {
  let service: CorsoValutazioneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CorsoValutazioneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
