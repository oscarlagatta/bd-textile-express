import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { Season } from "../../domain/season/season";
import { SeasonError } from "../../domain/season/season-error";

import { environment } from "../../../environments/environment";
import { catchError } from "rxjs/operators";
import { areAllEquivalent } from "@angular/compiler/src/output/output_ast";

@Injectable()
export class SeasonService {

  constructor (private httpClient : HttpClient){}

  getAllSeasons(): Observable<Season[] | SeasonError> {
    console.log(`getting all the seasons from the server`);
    return this.httpClient
      .get<Season[]>(`${environment.apiUrl}/season`)
      .pipe(catchError(err => this.handleHttpError(err)));
  }

  addNewSeason(seasonToAdd: Season): Observable<Season | SeasonError>{
    console.log(`getting all the seasons from the server`);
    return this.httpClient
    .post<Season>(`${environment.apiUrl}/season`, seasonToAdd)
    .pipe(catchError(err => this.handleHttpError(err)));
  }

  private handleHttpError(err: HttpErrorResponse): Observable<SeasonError> {
    const dataError: SeasonError = new SeasonError();
    dataError.errorNumber = 200;
    dataError.message = err.statusText;
    dataError.friendlyMessage = 'An error occurred retrieving data';

    return throwError(dataError);
  }
}
