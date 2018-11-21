import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  constructor(private cacheService: HttpCacheService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // check what is the HTTP VERB
    //  put, post , delete
    if (req.method !== 'GET') {
      console.log(`invalidating the cache: ${req.method} ${req.url}`);
      this.cacheService.invalidate();

      return next.handle(req);
    }

    const cachedResponse: HttpResponse<any> = this.cacheService.get(req.url);

    // returning the cahced response
    if (cachedResponse) {
      console.log(`Returning a cached resposne ${cachedResponse.url}`);
      console.log(cachedResponse); // response that it came from cache service

      return of(cachedResponse);
    }

    return next.handle(req).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          console.log(`Adding item to cache ${req.url}`);
          this.cacheService.put(req.url, event);
        }
      })
    );
  }
}
