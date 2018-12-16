import { async, TestBed } from '@angular/core/testing';
import { SharedUiLoginModule } from './shared-ui-login.module';

describe('SharedUiLoginModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedUiLoginModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(SharedUiLoginModule).toBeDefined();
  });
});
