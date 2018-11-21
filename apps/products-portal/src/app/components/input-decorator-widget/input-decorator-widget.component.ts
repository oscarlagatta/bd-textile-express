import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-workspace-input-decorator-widget',
  templateUrl: './input-decorator-widget.component.html',
  styleUrls: ['./input-decorator-widget.component.scss']
})
export class InputDecoratorWidgetComponent implements OnInit {
  widgetTitle = 'Input Decorator';

  brandId = 2;

  constructor() {}

  ngOnInit() {}

  toggleBrand() {
    this.brandId = this.brandId === 2 ? 3 : 2;
  }
}
