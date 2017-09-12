import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogBrowsingComponent } from './catalog-browsing.component';

describe('CatalogBrowsingComponent', () => {
  let component: CatalogBrowsingComponent;
  let fixture: ComponentFixture<CatalogBrowsingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogBrowsingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogBrowsingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
