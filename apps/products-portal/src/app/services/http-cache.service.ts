import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class HttpCacheService {
  // object to store the cache
  private requests: any = {};

  constructor() {}

  put(url: string, response: HttpResponse<any>): void {
    this.requests[url] = response;
  }

  get(url: string): HttpResponse<any> | undefined {
    return this.requests[url];
  }

  invalidateUrl(url: string): void {
    this.requests[url] = undefined;
  }

  // assign a new empty object literal
  invalidate(): void {
    this.requests = {};
  }
}
