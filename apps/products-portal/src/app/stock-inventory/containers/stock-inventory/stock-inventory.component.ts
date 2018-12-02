import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { componentNeedsResolution } from '@angular/core/src/metadata/resource_loading';
import { ValueTransformer } from '@angular/compiler/src/util';

export interface Product {
  id: number;
  price: number;
  name: string;
}

@Component({
  selector: 'demo-workspace-stock-inventory',
  templateUrl: './stock-inventory.component.html',
  styleUrls: ['./stock-inventory.component.css']
})
export class StockInventoryComponent implements OnInit {
  products: Product[] = [
    { id: 1, price: 2800, name: 'Macbook Pro' },
    { id: 2, price: 60, name: 'IPod' },
    { id: 3, price: 40, name: 'Apple Watch' },
    { id: 4, price: 90, name: 'iPhone' }
  ];

  productsNg: any[] = [
    { value: 1, label: 'Macbook Pro' },
    { value: 2, label: 'IPod' },
    { value: 3, label: 'Apple Watch' },
    { value: 4, label: 'iPhone' }
  ];

  form = new FormGroup({
    store: new FormGroup({
      branch: new FormControl('abc1'),
      code: new FormControl('0021')
    }),
    selector: this.createStock({}),
    stock: new FormArray([
      this.createStock({ product_id: 1, quantity: 10 }),
      this.createStock({ product_id: 3, quantity: 50 })
    ])
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }

  createStock(stock) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ''),
      quantity: new FormControl(stock.quantity || 10)
    });
  }

  addStock(stock) {
    const control = this.form.get('stock') as FormArray;
    control.push(this.createStock(stock));
  }

  removeStock({ group, index }: { group: FormGroup; index: number }) {
    console.log(group, index);
    const control = this.form.get('stock') as FormArray;
    control.removeAt(index);
  }
}
