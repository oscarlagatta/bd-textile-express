import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleViewContentComponent } from './toggle-view-content.component';

describe('ToggleViewContentComponent', () => {
  let component: ToggleViewContentComponent;
  let fixture: ComponentFixture<ToggleViewContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToggleViewContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleViewContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
