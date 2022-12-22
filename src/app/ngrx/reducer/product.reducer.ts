import { createReducer, on } from '@ngrx/store';
import { productAPIActions } from '../actions/create.actions';
import { Products } from 'src/app/interface/products';


export const initialState: ReadonlyArray<Products> = [];

export const productReducer = createReducer (
    initialState,
    on(productAPIActions.retrievedProductList, (_state, {products}) => products)
)
