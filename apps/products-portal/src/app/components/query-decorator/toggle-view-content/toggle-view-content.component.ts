import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  ViewChild,
  AfterViewInit
} from '@angular/core';

@Component({
  selector: 'ecom-workspace-toggle-view-content',
  templateUrl: './toggle-view-content.component.html',
  styleUrls: ['./toggle-view-content.component.scss']
})
export class ToggleViewContentComponent implements OnInit, AfterViewInit {
  @ContentChild('content') content: TemplateRef<any>;
  @ViewChild('view') view: TemplateRef<any>;

  showViewTemplate = true;

  liveTemplate: TemplateRef<any>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.liveTemplate = this.view;
    });
  }

  toggleTemplateSelected() {
    this.showViewTemplate = !this.showViewTemplate;
    this.liveTemplate = this.showViewTemplate ? this.view : this.content;
  }
}
