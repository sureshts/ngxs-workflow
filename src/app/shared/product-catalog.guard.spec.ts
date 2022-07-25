import { TestBed } from '@angular/core/testing';

import { ProductCatalogGuard } from './product-catalog.guard';

describe('ProductCatalogGuard', () => {
  let guard: ProductCatalogGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProductCatalogGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
