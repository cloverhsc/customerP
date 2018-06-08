import { TestBed, inject } from '@angular/core/testing';

import { OptionControlService } from './option-control.service';

describe('OptionControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OptionControlService]
    });
  });

  it('should be created', inject([OptionControlService], (service: OptionControlService) => {
    expect(service).toBeTruthy();
  }));
});
