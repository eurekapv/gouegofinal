import { TestBed } from '@angular/core/testing';

import { AreeService } from './aree.service';

describe('AreeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AreeService = TestBed.get(AreeService);
    expect(service).toBeTruthy();
  });
});
