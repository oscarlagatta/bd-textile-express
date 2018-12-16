import { async, TestBed } from '@angular/core/testing';
import { PrimeNgModule } from './prime-ng.module';

describe('PrimeNgModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [PrimeNgModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(PrimeNgModule).toBeDefined();
  });
});
