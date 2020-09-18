import { TestBed } from '@angular/core/testing';

import { StatusChangesGuard } from './status-changes.guard';

describe('StatusChangesGuard', () => {
  let guard: StatusChangesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StatusChangesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
