import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Brand } from '../domain/brand';
import { BrandError } from '../domain/brand-error';
import { Observable, of } from 'rxjs';
import { BrandService } from './brands.service';
import { catchError } from 'rxjs/operators';

@Injectable()
export class BrandResolverService implements Resolve<Brand[] | BrandError> {
  constructor(private brandService: BrandService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Brand[] | BrandError> {
    // we do not subscribe here
    return this.brandService.getAllBrands().pipe(catchError(err => of(err)));
  }
}
