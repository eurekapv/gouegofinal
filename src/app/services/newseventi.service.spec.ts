import { TestBed } from '@angular/core/testing';

import { NewseventiService } from './newseventi.service';

describe('NewseventiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewseventiService = TestBed.get(NewseventiService);
    expect(service).toBeTruthy();
  });
});
