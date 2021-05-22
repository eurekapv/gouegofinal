import { TestBed } from '@angular/core/testing';

import { LivelloService } from './livello.service';

describe('LivelloService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LivelloService = TestBed.get(LivelloService);
    expect(service).toBeTruthy();
  });
});
