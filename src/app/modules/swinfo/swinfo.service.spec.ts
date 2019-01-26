import { TestBed } from '@angular/core/testing';

import { SWInfoService } from './swinfo.service';

describe('SWInfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SWInfoService = TestBed.get(SWInfoService);
    expect(service).toBeTruthy();
  });
});
