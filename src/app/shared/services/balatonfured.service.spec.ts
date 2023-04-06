import { TestBed } from '@angular/core/testing';

import { BalatonfuredService } from './balatonfured.service';

describe('BalatonfuredService', () => {
  let service: BalatonfuredService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BalatonfuredService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
