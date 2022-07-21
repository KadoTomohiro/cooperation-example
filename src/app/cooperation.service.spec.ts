import { TestBed } from '@angular/core/testing';

import { CooperationService } from './cooperation.service';

describe('CooperationService', () => {
  let service: CooperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
