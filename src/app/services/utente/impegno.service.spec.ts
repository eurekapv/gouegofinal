import { TestBed } from '@angular/core/testing';

import { ImpegnoService } from './impegno.service';

describe('ImpegnoService', () => {
  let service: ImpegnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpegnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
