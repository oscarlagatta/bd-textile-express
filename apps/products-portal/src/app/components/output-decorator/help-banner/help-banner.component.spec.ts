import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpBannerComponent } from './help-banner.component';

describe('HelpBannerComponent', () => {
  let component: HelpBannerComponent;
  let fixture: ComponentFixture<HelpBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelpBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
