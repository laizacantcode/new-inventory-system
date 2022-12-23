import { createReducer, on } from '@ngrx/store';
import { ProductActions } from './product.actions';

export const initialState: ReadonlyArray<number> = [];

export const collectionReducer = createReducer(
  initialState,
  on(ProductActions.removeProduct, (state, { id }) =>
    state.filter((id) => id !== id)
  ),
  on(ProductActions.addProduct, (state, { id }) => {
    if (state.indexOf(id) > -1) return state;

    return [...state, id];
  })
);