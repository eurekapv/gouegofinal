import { TestBed } from '@angular/core/testing';

import { SmartInterfaceService } from './smart-interface.service';

describe('SmartInterfaceService', () => {
  let service: SmartInterfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmartInterfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
