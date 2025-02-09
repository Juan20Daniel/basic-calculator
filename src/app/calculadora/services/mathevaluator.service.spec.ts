import { TestBed } from '@angular/core/testing';

import { MathevaluatorService } from './mathevaluator.service';

describe('MathevaluatorService', () => {
  let service: MathevaluatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathevaluatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
