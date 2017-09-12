import { TestBed, inject } from '@angular/core/testing';

import { AddToChartService } from './add-to-chart.service';

describe('AddToChartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddToChartService]
    });
  });

  it('should be created', inject([AddToChartService], (service: AddToChartService) => {
    expect(service).toBeTruthy();
  }));
});
