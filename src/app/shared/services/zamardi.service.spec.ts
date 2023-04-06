import { TestBed } from '@angular/core/testing';

import { ZamardiService } from './zamardi.service';

describe('ZamardiService', () => {
  let service: ZamardiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZamardiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
