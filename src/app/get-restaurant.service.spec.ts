import { TestBed } from '@angular/core/testing';

import { GetRestaurantService } from './get-restaurant.service';

describe('GetRestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRestaurantService = TestBed.get(GetRestaurantService);
    expect(service).toBeTruthy();
  });
});
