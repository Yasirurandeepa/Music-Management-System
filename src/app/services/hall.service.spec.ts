import { TestBed, inject } from '@angular/core/testing';

import { HallService } from './hall.service';

describe('HallService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HallService]
    });
  });

  it('should be created', inject([HallService], (service: HallService) => {
    expect(service).toBeTruthy();
  }));
});
