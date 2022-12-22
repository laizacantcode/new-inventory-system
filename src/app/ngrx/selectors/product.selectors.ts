import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Products } from 'src/app/interface/products';

export const selectProducts = createFeatureSelector<ReadonlyArray<Products>>('products');

export const selectCollectionState  = createFeatureSelector<ReadonlyArray<number>>('collection');

export const selectProductCollection = createSelector(
    selectProducts, 
    selectCollectionState, 
    (products, collection) => {
        return collection.map((id) => products.find((products) => products.id === id));
    }
);