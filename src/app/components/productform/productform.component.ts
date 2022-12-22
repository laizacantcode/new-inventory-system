import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.scss']
})
export class ProductformComponent implements OnInit {
  productForm!: FormGroup;
  constructor() { }

  ngOnInit(): void {
      this.productForm = new FormGroup({
      productName: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(15)] ),
      productQty: new FormControl(null, Validators.required),
      productPrice: new FormControl(null, Validators.required),
      productDescription: new FormControl(null, Validators.required),
    })
  }

}
