import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  constructor(private http: HttpClient) { }

  getProduct() {
    return this.http.get<{products: Products[]}>
    ('https://63a19bb5a543280f775bc426.mockapi.io/Products')
    .pipe(map((products) => products.products || []));
  }
}
