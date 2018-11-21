import {
  Component,
  Directive,
  Input,
  HostListener,
  OnInit,
  ViewChild,
  AfterViewInit
} from '@angular/core';
import { MenuItem, Menu } from 'primeng/primeng';
import { Brand } from './domain/brand';
import { BrandService } from './services/brands.service';
import { Router } from '@angular/router';
import { BrandError } from './domain/brand-error';

declare var jQuery: any;

@Directive({
  selector: '[track]'
})
export class TrackDirective {
  @Input() track;

  @HostListener('click')
  onclick() {
    console.log(this.track);
  }
}
@Component({
  selector: 'demo-workspace-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'products-portal';

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu: Menu;
  @ViewChild('smallMenu') smallMenu: Menu;

  allBrands: Brand[];
  selectedBrand: Brand;

  constructor(private brandService: BrandService, private router: Router) {}

  ngOnInit() {
    const handleSelected = function(event) {
      const allMenus = jQuery(event.originalEvent.target).closest('ul');
      const allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass('menu-selected');
      const selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    };

    this.menuItems = [
      {
        label: 'Dashboard',
        icon: 'fa fa-home',
        routerLink: ['/dashboard'],
        command: event => handleSelected(event)
      },
      {
        label: 'Brands',
        icon: 'fa fa-calendar',
        routerLink: ['/brands'],
        command: event => handleSelected(event)
      },
      {
        label: 'Styles',
        icon: 'fa fa-clock-o',
        routerLink: ['/'],
        command: event => handleSelected(event)
      },
      {
        label: 'Products',
        icon: 'fa fa-tasks',
        routerLink: ['/'],
        command: event => handleSelected(event)
      },
      {
        label: 'My Profile',
        icon: 'fa fa-users',
        routerLink: ['/'],
        command: event => handleSelected(event)
      },
      {
        label: 'Settings',
        icon: 'fa fa-sliders',
        routerLink: ['/'],
        command: event => handleSelected(event)
      }
    ];

    this.miniMenuItems = [];
    this.menuItems.forEach((item: MenuItem) => {
      const miniItem = { icon: item.icon, routerLink: item.routerLink };
      this.miniMenuItems.push(miniItem);
    });

    this.brandService
      .getAllBrands()
      .subscribe(
        (data: Brand[]) => (this.allBrands = data),
        (err: BrandError) => console.log(err.friendlyMessage),
        () => console.log('all done getting the brands from the server')
      );

    this.brandService
      .getBrandById(1)
      .subscribe(
        (data: Brand) => (this.selectedBrand = data),
        err => console.log(err),
        () => console.log('all done getting the brands from the server')
      );
  }

  addBrand() {
    const newBrand: Brand = {
      brandName: 'New Brand',
      isVisible: true,
      isSuppressed: false
    };

    console.log('new brand', newBrand);

    this.brandService
      .addBrand(newBrand)
      .subscribe(
        (data: Brand) => console.log('added new brand', data),
        err => console.log(err)
      );
  }

  selectInitialMenuItemBasedOnUrl() {
    const path = document.location.pathname;
    const menuItem = this.menuItems.find(item => {
      return item.routerLink[0] === path;
    });
    if (menuItem) {
      const iconToFind = '.' + menuItem.icon.replace('fa ', ''); // make fa fa-home into .fa-home
      const selectedIcon = document.querySelector(`${iconToFind}`);
      jQuery(selectedIcon)
        .closest('li')
        .addClass('menu-selected');
    }
  }

  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }
}
