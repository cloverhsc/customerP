import { TestBed, inject } from '@angular/core/testing';

import { ServiceMgService } from './service-mg.service';

describe('ServiceMgService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceMgService]
    });
  });

  it('should be created', inject([ServiceMgService], (service: ServiceMgService) => {
    expect(service).toBeTruthy();
  }));
});
