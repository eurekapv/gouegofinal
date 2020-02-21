import { TestBed } from '@angular/core/testing';

import { CourseschedulerService } from './coursescheduler.service';

describe('CourseschedulerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseschedulerService = TestBed.get(CourseschedulerService);
    expect(service).toBeTruthy();
  });
});
