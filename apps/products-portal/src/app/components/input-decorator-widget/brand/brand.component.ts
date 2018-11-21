import { Component, OnInit, Input } from '@angular/core';
import { BrandService } from '../../../services/brands.service';
import { Brand } from '../../../domain/brand';
import { Observable } from 'rxjs';

@Component({
  selector: 'ecom-workspace-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.scss']
})
export class BrandComponent implements OnInit {
  currentBrand_: Brand;

  // getters and setters
  @Input()
  set brandId(id) {
    if (!this.currentBrand_ || this.currentBrand_.brandId !== id) {
      this.PopulateDisplayBrand(id).subscribe(b => (this.currentBrand_ = b));
    }
  }

  constructor(private brandService: BrandService) {}

  ngOnInit() {}

  get brandId(): number {
    return this.currentBrand_ ? this.currentBrand_.brandId : 0;
  }

  set currentBrand(b: Brand) {
    if (b) {
      this.currentBrand_ = b;
    }
  }

  get currentBrand(): Brand {
    return this.currentBrand_;
  }

  private PopulateDisplayBrand(brandId): Observable<Brand> {
    return this.brandService.getBrandById(brandId);
  }
}
