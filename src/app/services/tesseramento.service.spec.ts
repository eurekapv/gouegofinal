import { TestBed } from '@angular/core/testing';

import { TesseramentoService } from './tesseramento.service';

describe('TesseramentoService', () => {
  let service: TesseramentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesseramentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
