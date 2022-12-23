import { createSelector, createFeatureSelector } from '@ngrx/store';
import { products } from '../product.model';

export const selectProducts =
  createFeatureSelector<ReadonlyArray<products>>('products');

export const selectCollectionState =
  createFeatureSelector<ReadonlyArray<number>>('collection');


  export const selectBookCollection = createSelector(
    selectProducts,
    selectCollectionState,
    (product, collection) => {
      return collection.map((id) => product.find((product) => product.id === id));
    }
  );
