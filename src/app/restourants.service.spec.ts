import { TestBed } from '@angular/core/testing';

import { RestourantsService } from './restourants.service';

describe('RestourantsService', () => {
  let service: RestourantsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestourantsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
