import { TestBed } from '@angular/core/testing';

import { DocstructureService } from './docstructure.service';

describe('DocstructureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocstructureService = TestBed.get(DocstructureService);
    expect(service).toBeTruthy();
  });
});
