import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { products } from './product.model';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Array<products>> {
    return this.http
      .get<{ items: products[] }>(
        'https://63a19bb5a543280f775bc426.mockapi.io/Products'
      )
      .pipe(map((products) => products.items || []));
  }
}