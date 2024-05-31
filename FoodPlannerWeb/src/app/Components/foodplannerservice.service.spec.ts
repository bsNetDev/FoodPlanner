import { TestBed } from '@angular/core/testing';

import { FoodPlannerService } from './foodplannerservice.service';

describe('FoodplannerserviceService', () => {
  let service: FoodplannerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodplannerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
