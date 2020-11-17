import { TestBed } from '@angular/core/testing';

import { WiltService } from './wilt.service';

describe('WiltService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WiltService = TestBed.get(WiltService);
    expect(service).toBeTruthy();
  });
});
