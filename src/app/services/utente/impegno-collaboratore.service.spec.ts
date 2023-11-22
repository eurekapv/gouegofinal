import { TestBed } from '@angular/core/testing';

import { ImpegnoCollaboratoreService } from './impegno-collaboratore.service';

describe('ImpegnoCollaboratoreService', () => {
  let service: ImpegnoCollaboratoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpegnoCollaboratoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
