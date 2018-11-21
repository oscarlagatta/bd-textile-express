import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputDecoratorComponent } from './output-decorator.component';

describe('OutputDecoratorComponent', () => {
  let component: OutputDecoratorComponent;
  let fixture: ComponentFixture<OutputDecoratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OutputDecoratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutputDecoratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
