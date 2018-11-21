import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDecoratorWidgetComponent } from './input-decorator-widget.component';

describe('InputDecoratorWidgetComponent', () => {
  let component: InputDecoratorWidgetComponent;
  let fixture: ComponentFixture<InputDecoratorWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDecoratorWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDecoratorWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
