import { TestBed } from '@angular/core/testing';

import { Profile } from './profilesService';

describe('Profile', () => {
  let service: Profile;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Profile);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
