import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'demo-workspace-stock-products',
  templateUrl: './stock-products.component.html',
  styleUrls: ['./stock-products.component.css']
})
export class StockProductsComponent implements OnInit {
  @Input() parent: FormGroup;

  @Output() removed = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onRemove(group, index) {
    this.removed.emit({ group, index });
  }

  get stocks() {
    return (this.parent.get('stock') as FormArray).controls;
  }
}
