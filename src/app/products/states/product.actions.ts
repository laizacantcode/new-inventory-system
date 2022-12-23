import { createActionGroup, props } from '@ngrx/store';
import { products } from '../product.model';

export const ProductActions = createActionGroup({
  source: 'Products',
  events: {
    'Add Product': props<{ id: number }>(),
    'Remove Product': props<{ id: number }>(),
  },
});

export const ProductApiActions = createActionGroup({
  source: 'Product API',
  events: {
    'Retrieved Product List': props<{ products: ReadonlyArray<products> }>(),
  },
});