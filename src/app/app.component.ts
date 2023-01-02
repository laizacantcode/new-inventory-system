import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { increment, decrement, reset } from './ngrx/actions/counter.actions';
import {
  FormGroup,
  FormControl,
  Validators,
  FormGroupDirective,
} from '@angular/forms';
import { Products } from './interface/products';
import { InventoryService } from './service/inventory.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  createProductForm!: FormGroup;
  formState!: any;
  count$: Observable<number>;
  productQuantity!: number;
  formButton = false;
  productID!: number;
  viewProduct!: Products;

  constructor(
    private service: InventoryService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    this.count$.subscribe((event) => (this.productQuantity = event));
  }

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      productID: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(10),
      ]),
      productName: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(15),
      ]),
      productQty: new FormControl('0', [
        Validators.required,
        Validators.min(1),
      ]),
      productPrice: new FormControl(null, [
        Validators.required,
        Validators.min(1),
      ]),
      productDescription: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(1000),
      ]),
    });
  }
  openForm(openForm: boolean) {
    this.formState = openForm;
  }

  create(newProduct: Products, productForm: FormGroupDirective) {
    if (this.createProductForm?.invalid) {
      console.log('INVALID!');
    } else {
      newProduct = this.createProductForm.value;
      this.service.create(newProduct);
      productForm.resetForm();
    }
  }

  increment() {
    this.createProductForm.setValue({
      ...this.createProductForm.value,
      productQty: this.productQuantity,
    });
    this.store.dispatch(increment());
  }

  decrement() {
    this.createProductForm.setValue({
      ...this.createProductForm.value,
      productQty: this.productQuantity,
    });
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  close(productForm: FormGroupDirective) {
    this.formState = false;
    productForm.resetForm();
  }

  patch(currentData: Products) {
    this.formState = true;
    this.formButton = true;
    this.createProductForm.patchValue(currentData);
    this.productID = currentData.id;
  }

  displayProduct(view: Products) {
    this.viewProduct = view;
    console.log(this.viewProduct);
  }

  update(): void {
    this.service
      .update(this.productID, this.createProductForm.value)
      .subscribe((res: any) => {
        console.log('DATA UPDATED SUCCESSFULLY.');
        console.log(res);
      }).unsubscribe;
  }
  ngOnDestroy(): void {}
}
