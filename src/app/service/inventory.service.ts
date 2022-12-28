import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient) {}

  displayProducts(): Observable<Products[]> {
    return this.http
      .get<Products[]>('https://63a19bb5a543280f775bc426.mockapi.io/Products')
      .pipe(map((data) => Object.values(data)));
  }

  delete(productID: number) {
    return this.http
      .delete<Products[]>(
        'https://63a19bb5a543280f775bc426.mockapi.io/Products/' + productID
      )
      .subscribe((response) => console.log('deleted!'));
  }

  create(newProduct: Products) {
    return this.http
      .post<Products>(
        'https://63a19bb5a543280f775bc426.mockapi.io/Products',
        newProduct
      )
      .subscribe((response) => console.log('success'));
  }

  getProductInfo(productID: number) {
    return this.http.get<any>(
      `https://63a19bb5a543280f775bc426.mockapi.io/Products/${productID}`
    );
  }

  update(productID: number, productInfo: Products) {
    return this.http.put(`https://63a19bb5a543280f775bc426.mockapi.io/Products/${productID}`, productInfo)
  }
}
