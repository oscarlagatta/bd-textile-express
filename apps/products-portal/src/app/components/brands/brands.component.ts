import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { Brand } from '../../domain/brand';
import { BrandService } from '../../services/brands.service';
import { TriStateCheckbox } from 'primeng/primeng';
import { BrandError } from '../../domain/brand-error';

@Component({
  selector: 'ecom-workspace-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {
  // data structure that's going to hold all of our form
  // backing properties and their validation logic

  brandForm: FormGroup; // how do we use it to construct our form group object

  brands: Brand[] | BrandError;

  constructor(private fb: FormBuilder, private brandService: BrandService) {}

  ngOnInit() {
    this.brandForm = this.fb.group({
      brandName: ['', [Validators.required, Validators.minLength(5)]],
      isSuppressed: '',
      isVisible: ''
    });

    this.brandService
      .getAllBrands()
      .subscribe(brands => (this.brands = brands));
  }

  hasFormErrors() {
    return !this.brandForm.valid;
  }

  onSubmit() {
    alert(JSON.stringify(this.brandForm.value));
  }
}
