import { TestBed, inject } from '@angular/core/testing';

import { WindowsServiceService } from './windows-service.service';

describe('WindowsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WindowsServiceService]
    });
  });

  it('should be created', inject([WindowsServiceService], (service: WindowsServiceService) => {
    expect(service).toBeTruthy();
  }));
});
