import { TestBed } from '@angular/core/testing';

import { TipoTesseraService } from './tipo-tessera.service';

describe('TipoTesseraService', () => {
  let service: TipoTesseraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoTesseraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
