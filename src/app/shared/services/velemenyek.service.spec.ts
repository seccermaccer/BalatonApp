import { TestBed } from '@angular/core/testing';

import { VelemenyekService } from './velemenyek.service';

describe('VelemenyekService', () => {
  let service: VelemenyekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VelemenyekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
