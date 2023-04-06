import { TestBed } from '@angular/core/testing';

import { OsszesService } from './osszes.service';

describe('OsszesService', () => {
  let service: OsszesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OsszesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
