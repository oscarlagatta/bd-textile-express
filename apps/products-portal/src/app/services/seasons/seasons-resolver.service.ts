import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Season } from "../../domain/season/season";
import { SeasonError } from "../../domain/season/season-error";
import { SeasonService } from "./seasons.service";

@Injectable()
export class SeasonsResolverService implements Resolve<Season[] | SeasonError> {
  constructor(private SeasonsService: SeasonService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Season[] | SeasonError> {
    // we do not subscribe here
    return this.SeasonsService.getAllSeasons().pipe(catchError(err => of(err)));
  }
}
