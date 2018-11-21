import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ecom-workspace-output-decorator',
  templateUrl: './output-decorator.component.html',
  styleUrls: ['./output-decorator.component.scss']
})
export class OutputDecoratorComponent implements OnInit {
  err = false;
  handler = true;

  constructor() {}

  ngOnInit() {}

  showHelp() {
    alert(
      'this code is in the parent component, collect error information and redirect to help desk...'
    );
  }

  toggleHandler() {
    this.handler = !this.handler;
  }

  toggleErr() {
    this.err = !this.err;
  }
}
