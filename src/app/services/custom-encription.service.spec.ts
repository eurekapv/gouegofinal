import { TestBed } from '@angular/core/testing';

import { CustomEncriptionService } from './custom-encription.service';

describe('CustomEncriptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CustomEncriptionService = TestBed.get(CustomEncriptionService);
    expect(service).toBeTruthy();
  });
});
