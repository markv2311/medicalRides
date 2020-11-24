import { TestBed } from '@angular/core/testing';

import { DriverStatusService } from './driver-status.service';

describe('DriverStatusService', () => {
  let service: DriverStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DriverStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
