import { TestBed } from '@angular/core/testing';

import { CategoriaetaService } from './categoriaeta.service';

describe('CategoriaetaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CategoriaetaService = TestBed.get(CategoriaetaService);
    expect(service).toBeTruthy();
  });
});
