import { TestBed } from '@angular/core/testing';

import { IscrizionecorsoService } from './iscrizionecorso.service';

describe('IscrizionecorsoService', () => {
  let service: IscrizionecorsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IscrizionecorsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
