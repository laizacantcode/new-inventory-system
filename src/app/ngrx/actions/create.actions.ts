import { createActionGroup, props } from '@ngrx/store';
import { Products } from 'src/app/interface/products';

export const productActions = createActionGroup({
  source: 'Products',
  events: {
    'Add Product': props<{ productID: number }>(),
    'Remove Product': props<{ productID: number }>(),
  },
});

export const productAPIActions =  createActionGroup({
    source: 'product API',
    events: {
        'Retrieved Product List': props<{products: ReadonlyArray<Products> }>(),
    },
});