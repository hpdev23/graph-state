import { TestBed } from '@angular/core/testing';

import { GraphStateService } from './graph-state.service';

describe('GraphStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GraphStateService = TestBed.get(GraphStateService);
    expect(service).toBeTruthy();
  });
});
