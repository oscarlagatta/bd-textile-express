import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockSelectorComponent } from './stock-selector.component';

describe('StockSelectorComponent', () => {
  let component: StockSelectorComponent;
  let fixture: ComponentFixture<StockSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
