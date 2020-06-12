import { TestBed } from '@angular/core/testing';

import { SubmitCredentialsService } from './submit-credentials.service';

describe('SubmitCredentialsService', () => {
  let service: SubmitCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
