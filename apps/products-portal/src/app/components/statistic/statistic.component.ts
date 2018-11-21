import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ecom-workspace-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.scss']
})
export class StatisticComponent implements OnInit {
  @Input() icon: string;
  @Input() label: string;
  @Input() value: string;
  @Input() colour: string;
  constructor() {}

  ngOnInit() {}
}
