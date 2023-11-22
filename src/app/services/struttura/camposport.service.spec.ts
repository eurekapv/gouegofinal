import { TestBed } from '@angular/core/testing';

import { CamposportService } from './camposport.service';

describe('CamposportService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CamposportService = TestBed.get(CamposportService);
    expect(service).toBeTruthy();
  });
});
