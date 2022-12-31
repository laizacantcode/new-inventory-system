import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../interface/products';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(private http: HttpClient, private snackbar: MatSnackBar) {}

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
      .subscribe(() => {
        this.snackbar.open('Product Deleted Successully.', '', {
          duration: 2000,
          panelClass: 'success-snackbar',
        });
      }).unsubscribe;
  }

  create(newProduct: Products) {
    return this.http
      .post<Products>(
        'https://63a19bb5a543280f775bc426.mockapi.io/Products',
        newProduct
      )
      .subscribe(() => {
        this.snackbar.open('Product Added Successully.', '', {
          duration: 2000,
          panelClass: 'success-snackbar',
        });
      }).unsubscribe;
  }

  getProductInfo(productID: number) {
    return this.http.get<any>(
      `https://63a19bb5a543280f775bc426.mockapi.io/Products/${productID}`
    )
  }

  update(productID: number, productInfo: Products) {
    return this.http.put(
      `https://63a19bb5a543280f775bc426.mockapi.io/Products/${productID}`,
      productInfo
    );
  }
}
