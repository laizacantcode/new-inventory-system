import { createReducer, on } from '@ngrx/store';

import { ProductApiActions } from './product.actions';
import { products } from '../product.model';

export const initialState: ReadonlyArray<products> = [];

export const productReducer = createReducer(
  initialState,
  on(ProductApiActions.retrievedProductList, (_state, { products }) => products)
);