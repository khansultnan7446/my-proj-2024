import { TestBed } from '@angular/core/testing';

import { Flipkarts1Service } from './flipkarts1.service';

describe('Flipkarts1Service', () => {
  let service: Flipkarts1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flipkarts1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
