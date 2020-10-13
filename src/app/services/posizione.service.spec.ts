import { TestBed } from '@angular/core/testing';

import { PosizioneService } from './posizione.service';

describe('PosizioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PosizioneService = TestBed.get(PosizioneService);
    expect(service).toBeTruthy();
  });
});
