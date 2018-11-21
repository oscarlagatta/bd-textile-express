import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { BrandService } from '../../services/brands.service';
import { ActivatedRoute } from '@angular/router';
import { Brand } from '../../domain/brand';
import { BrandError } from '../../domain/brand-error';

const DEFAULT_COLORS = [
  '#3366CC',
  '#DC3912',
  '#FF9900',
  '#109618',
  '#990099',
  '#3B3EAC',
  '#0099C6',
  '#DD4477',
  '#66AA00',
  '#B82E2E',
  '#316395',
  '#994499',
  '#22AA99',
  '#AAAA11',
  '#6633CC',
  '#E67300',
  '#8B0707',
  '#329262',
  '#5574A6',
  '#3B3EAC'
];

@Component({
  selector: 'ecom-workspace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input() brandId: number;

  allBrands: Brand[];

  productsByBrand = [
    { id: 1, name: 'Armani', productsCount: 8 },
    { id: 2, name: 'Fendi ', productsCount: 16 },
    { id: 3, name: 'Chanel', productsCount: 24 }
  ];

  chartOptions = {
    title: {
      display: true,
      text: 'Products By Brand'
    },
    legend: {
      position: 'bottom'
    }
  };

  pieLabels = this.productsByBrand.map(proj => proj.name);
  pieData = this.productsByBrand.map(proj => proj.productsCount);

  pieColors = this.configureDefaultColours(this.pieData);

  hoursByProjectChartData = {
    labels: this.pieLabels,
    datasets: [
      {
        data: this.pieData,
        backgroundColor: this.pieColors
      }
    ]
  };

  private configureDefaultColours(data: number[]): string[] {
    let customColours = [];
    if (data.length) {
      customColours = data.map((element, idx) => {
        return DEFAULT_COLORS[idx % DEFAULT_COLORS.length];
      });
    }

    return customColours;
  }
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const resolvedData: Brand[] | BrandError = this.route.snapshot.data[
      'resolvedBrands'
    ];

    if (resolvedData instanceof BrandError) {
      console.log(`dashboard compoenent error`);
    } else {
      this.allBrands = resolvedData;
    }
  }
}
