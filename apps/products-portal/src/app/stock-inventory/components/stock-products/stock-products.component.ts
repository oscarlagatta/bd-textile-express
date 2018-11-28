import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'demo-workspace-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;

  constructor() {}

  ngOnInit() {}

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
