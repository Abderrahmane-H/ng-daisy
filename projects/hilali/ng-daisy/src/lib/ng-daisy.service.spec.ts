import { TestBed } from '@angular/core/testing';

import { NgDaisyService } from './ng-daisy.service';

describe('NgDaisyService', () => {
  let service: NgDaisyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgDaisyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
