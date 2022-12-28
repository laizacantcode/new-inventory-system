import { Component, OnInit, Input } from '@angular/core';
import { Products } from 'src/app/interface/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() viewProduct!: Products;
  displayProducts = false;
  constructor() {}

  ngOnInit(): void {}
}
