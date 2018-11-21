import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryDecoratorComponent } from './query-decorator.component';

describe('QueryDecoratorComponent', () => {
  let component: QueryDecoratorComponent;
  let fixture: ComponentFixture<QueryDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
