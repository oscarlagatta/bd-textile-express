import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from '../../containers/stock-inventory/stock-inventory.component';

@Component({
  selector: 'demo-workspace-stock-selector',
  templateUrl: './stock-selector.component.html',
  styleUrls: ['./stock-selector.component.css']
})
export class StockSelectorComponent implements OnInit {
  @Input() parent: FormGroup;
  @Input() products: Product[];
  constructor() {}

  ngOnInit() {}
}
