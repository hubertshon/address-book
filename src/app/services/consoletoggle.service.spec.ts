import { TestBed } from '@angular/core/testing';

import { ConsoletoggleService } from './consoletoggle.service';

describe('ConsoletoggleService', () => {
  let service: ConsoletoggleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsoletoggleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
