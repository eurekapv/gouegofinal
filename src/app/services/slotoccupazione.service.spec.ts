import { TestBed } from '@angular/core/testing';

import { SlotoccupazioneService } from './slotoccupazione.service';

describe('SlotoccupazioneService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlotoccupazioneService = TestBed.get(SlotoccupazioneService);
    expect(service).toBeTruthy();
  });
});
