import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Brand } from '../domain/brand';
import { catchError } from 'rxjs/operators';
import { BrandError } from '../domain/brand-error';
import { environment } from '../../environments/environment';

@Injectable()
export class BrandService {
  constructor(private httpClient: HttpClient) {}

  getAllBrands(): Observable<Brand[] | BrandError> {
    console.log(`getting all the brands from the server`);
    return this.httpClient
      .get<Brand[]>(`${environment.apiUrl}/brand`)
      .pipe(catchError(err => this.handleHttpError(err)));
  }

  private handleHttpError(err: HttpErrorResponse): Observable<BrandError> {
    const dataError: BrandError = new BrandError();
    dataError.errorNumber = 100;
    dataError.message = err.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data';

    return throwError(dataError);
  }

  getBrandById(id: number): Observable<Brand> {
    return this.httpClient.get<Brand>(`${environment.apiUrl}/brand/${id}`);
  }

  addBrand(newBrand: Brand): Observable<Brand> {
    return this.httpClient.post<Brand>(`${environment.apiUrl}/brand`, newBrand);
  }

  updateBrand(updatedBrand: Brand): Observable<void> {
    return this.httpClient.put<void>(
      `${environment.apiUrl}/brand/${updatedBrand.brandId}`,
      this.updateBrand
    );
  }

  deleteBrand(brandId: number): Observable<void> {
    return this.httpClient.delete<void>(
      `https://localhost:5001/api/brand/${brandId}`
    );
  }
}
