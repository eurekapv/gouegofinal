import { TestBed } from '@angular/core/testing';

import { ImpegnoCustodeService } from './impegno-custode.service';

describe('ImpegnoCustodeService', () => {
  let service: ImpegnoCustodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImpegnoCustodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
