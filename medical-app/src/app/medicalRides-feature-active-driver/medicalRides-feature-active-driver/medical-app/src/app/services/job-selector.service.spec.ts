import { TestBed } from '@angular/core/testing';

import { JobSelectorService } from './job-selector.service';

describe('JobSelectorService', () => {
  let service: JobSelectorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JobSelectorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
