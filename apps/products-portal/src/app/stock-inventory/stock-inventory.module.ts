import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { StockInventoryComponent } from './containers/stock-inventory/stock-inventory.component';
import { Browser } from 'protractor';
import { StockBranchComponent } from './components/stock-branch/stock-branch.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';

@NgModule({
  imports: [ReactiveFormsModule, BrowserModule, CommonModule],
  exports: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent
  ],
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockSelectorComponent,
    StockProductsComponent
  ],
  providers: []
})
export class StockInventoryModule {}
