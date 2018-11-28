import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockBranchComponent } from './stock-branch.component';

describe('StockBranchComponent', () => {
  let component: StockBranchComponent;
  let fixture: ComponentFixture<StockBranchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockBranchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
