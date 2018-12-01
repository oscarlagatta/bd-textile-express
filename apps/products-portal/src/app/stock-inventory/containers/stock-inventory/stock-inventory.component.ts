import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

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
    selector: new FormGroup({
      product_id: new FormControl(),
      quantity: new FormControl(10)
    }),
    stock: new FormArray([
      new FormGroup({
        product_id: new FormControl(3),
        quantity: new FormControl(50)
      })
    ])
  });
  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('Submit: ', this.form.value);
  }
}
