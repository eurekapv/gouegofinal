import { TestBed } from '@angular/core/testing';

import { DataChiusuraService } from './data-chiusura.service';

describe('DataChiusuraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataChiusuraService = TestBed.get(DataChiusuraService);
    expect(service).toBeTruthy();
  });
});
