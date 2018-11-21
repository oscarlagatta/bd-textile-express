import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ecom-workspace-help-banner',
  templateUrl: './help-banner.component.html',
  styleUrls: ['./help-banner.component.scss']
})
export class HelpBannerComponent implements OnInit {
  @Output() help: EventEmitter<void> = new EventEmitter<void>();
  @ViewChild('hello') templateHello: TemplateRef<any>;

  showHelpDeskLink = false;

  constructor() {}

  ngOnInit() {
    // we show the contact link if something is subscribed to the help output property
    this.showHelpDeskLink = this.help.observers.length > 0;
  }

  helpClicked() {
    this.help.emit();
  }
}

// ViewChild  and ContentChild
//ViewChildren and ContentChildren
