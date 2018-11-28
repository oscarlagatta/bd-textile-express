import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';

import { AppComponent, TrackDirective } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

import { AddRequestHeaderInterceptor } from './services/add-header.interceptor';
import { LogResponseInterceptor } from './services/log-response.interceptor';
import { CacheInterceptor } from './services/cache.interceptor';
import { HttpCacheService } from './services/http-cache.service';
import { InputDecoratorWidgetComponent } from './components/input-decorator-widget/input-decorator-widget.component';
import { BrandComponent } from './components/input-decorator-widget/brand/brand.component';
import { OutputDecoratorComponent } from './components/output-decorator/output-decorator.component';
import { HelpBannerComponent } from './components/output-decorator/help-banner/help-banner.component';
import { QueryDecoratorComponent } from './components/query-decorator/query-decorator.component';
import { ToggleViewContentComponent } from './components/query-decorator/toggle-view-content/toggle-view-content.component';
import { BrandService } from './services/brands.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BrandResolverService } from './services/brand-resolver.service';
import { SeasonService } from './services/seasons/seasons.service';
import { SeasonsResolverService } from './services/seasons/seasons-resolver.service';

import {
  MenuModule,
  PanelModule,
  ChartModule,
  InputTextModule,
  ButtonModule,
  MessageModule,
  CheckboxModule
} from 'primeng/primeng';
import {
  InputMaskModule,
  InputTextareaModule,
  EditorModule,
  CalendarModule,
  RadioButtonModule,
  FieldsetModule,
  DropdownModule,
  MultiSelectModule,
  ListboxModule,
  SpinnerModule,
  SliderModule,
  RatingModule,
  DataTableModule,
  ContextMenuModule,
  TabViewModule,
  DialogModule,
  StepsModule,
  ScheduleModule,
  TreeModule,
  GMapModule,
  DataGridModule,
  TooltipModule,
  ConfirmDialogModule,
  GrowlModule,
  DragDropModule,
  GalleriaModule
} from 'primeng/primeng';

import { PaginatorModule } from 'primeng/paginator';
import { TableModule } from 'primeng/table';

import { SettingsComponent } from './components/settings/settings.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrandsComponent } from './components/brands/brands.component';
import { FielderrorsComponent } from './components/fielderrors/fielderrors.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SeasonsComponent } from './components/seasons/seasons.component';
import { StockInventoryModule } from './stock-inventory/stock-inventory.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    resolve: { resolvedBrands: BrandResolverService },
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    resolve: { resolvedBrands: BrandResolverService }
  },
  {
    path: 'brands',
    component: BrandsComponent
  },
  {
    path: 'seasons',
    component: SeasonsComponent,
    resolve: { resolvedSeasons: SeasonsResolverService }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    TrackDirective,
    InputDecoratorWidgetComponent,
    BrandComponent,
    OutputDecoratorComponent,
    HelpBannerComponent,
    QueryDecoratorComponent,
    ToggleViewContentComponent,
    SettingsComponent,
    StatisticComponent,
    BrandsComponent,
    FielderrorsComponent,
    SeasonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    PanelModule,
    MenuModule,
    MessageModule,
    ButtonModule,
    CheckboxModule,
    ChartModule,
    TableModule,
    PaginatorModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
    EditorModule,
    CalendarModule,
    RadioButtonModule,
    FieldsetModule,
    DropdownModule,
    MultiSelectModule,
    ListboxModule,
    SpinnerModule,
    SliderModule,
    RatingModule,
    DataTableModule,
    ContextMenuModule,
    TabViewModule,
    DialogModule,
    StepsModule,
    ScheduleModule,
    TreeModule,
    GMapModule,
    DataGridModule,
    TooltipModule,
    ConfirmDialogModule,
    GrowlModule,
    DragDropModule,
    GalleriaModule,
    StockInventoryModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [storeFreeze] : [] }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [
    BrandService,
    BrandResolverService,
    SeasonService,
    SeasonsResolverService,
    HttpCacheService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddRequestHeaderInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LogResponseInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
