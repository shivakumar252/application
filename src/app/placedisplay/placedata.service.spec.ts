import { TestBed } from '@angular/core/testing';

import { PlacedataService } from './placedata.service';

describe('PlacedataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlacedataService = TestBed.get(PlacedataService);
    expect(service).toBeTruthy();
  });
});
