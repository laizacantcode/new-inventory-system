import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  selectProducts,
  selectProductCollection,
} from './products/states/product.selectors';
import {
  ProductActions,
  ProductApiActions,
} from './products/states/product.actions';
import { productService } from './products/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  products$ = this.store.select(selectProducts);
  productCollection$ = this.store.select(selectProductCollection);

  onAdd(id: number) {
    this.store.dispatch(ProductActions.addProduct({ id }));
  }

  onRemove(id: number) {
    this.store.dispatch(ProductActions.removeProduct({ id }));
  }

  constructor(private store: Store, private service: productService) {}

  ngOnInit(): void {
    this.service
      .getProducts()
      .subscribe((products) =>
        this.store.dispatch(
          ProductApiActions.retrievedProductList({ products })
        )
      );
  }
}
