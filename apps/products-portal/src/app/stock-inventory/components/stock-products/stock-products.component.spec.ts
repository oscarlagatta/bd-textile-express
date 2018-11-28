import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockProductsComponent } from './stock-products.component';

describe('StockProductsComponent', () => {
  let component: StockProductsComponent;
  let fixture: ComponentFixture<StockProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
