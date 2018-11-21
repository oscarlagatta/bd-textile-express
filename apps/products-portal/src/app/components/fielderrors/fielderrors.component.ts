import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'ecom-workspace-fielderrors',
  templateUrl: './fielderrors.component.html',
  styleUrls: ['./fielderrors.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FielderrorsComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() fieldName: string;
  @Input() niceName: string;
  constructor() {}

  ngOnInit() {}

  fieldErrors(field: string) {
    const controlState = this.form.controls[field];
    return controlState.dirty && controlState.errors
      ? controlState.errors
      : null;
  }
}
