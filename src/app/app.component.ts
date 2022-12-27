import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
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
export class AppComponent implements OnInit {
  createProductForm!: FormGroup;
  formState!: any;
  count$: Observable<number>;
  productQuantity!: number;
  formButton = false;
  @Input() currentProductInfo!: Products;

  constructor(
    private service: InventoryService,
    private store: Store<{ count: number }>
  ) {
    this.count$ = store.select('count');
    this.count$.subscribe((event) => (this.productQuantity = event));
  }

  ngOnInit(): void {
    this.createProductForm = new FormGroup({
      productID: new FormControl(null),
      productName: new FormControl(null, Validators.required),
      productQty: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),
      productDescription: new FormControl(null, Validators.required),
    });
  }
  openForm(openForm: Object) {
    this.formState = openForm;
    console.log(this.formState);
  }

  create(newProduct: Products, productForm: FormGroupDirective) {
    if (this.createProductForm.invalid) {
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

  patch(currentData: Object) {
    this.formButton = true;
    this.createProductForm.patchValue(currentData);
  }

  update() {}
}
