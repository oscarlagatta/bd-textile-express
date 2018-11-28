import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockInventoryComponent } from './stock-inventory.component';

describe('StockInventoryComponent', () => {
  let component: StockInventoryComponent;
  let fixture: ComponentFixture<StockInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
