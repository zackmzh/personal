import { TestBed, inject } from '@angular/core/testing';

import { GetMockService } from './get-mock.service';

describe('GetMockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMockService]
    });
  });

  it('should be created', inject([GetMockService], (service: GetMockService) => {
    expect(service).toBeTruthy();
  }));

});
