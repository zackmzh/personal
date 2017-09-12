import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductBrowsingComponent } from './product-browsing.component';

describe('ProductBrowsingComponent', () => {
  let component: ProductBrowsingComponent;
  let fixture: ComponentFixture<ProductBrowsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductBrowsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
