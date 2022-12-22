import { createReducer, on } from '@ngrx/store';
import { productActions } from '../actions/create.actions';

export const initialState: ReadonlyArray<number> = [];

export const collectionReducer = createReducer(
  initialState,
  on(productActions.removeProduct, (state, { productID }) =>
    state.filter((id) => id !== productID)
  ),

  on(productActions.addProduct, (state, { productID }) => {
    if (state.indexOf(productID) > -1) return state;
 
    return [...state, productID];
  }),
  
);
