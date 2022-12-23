import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { products } from '../product.model';

@Component({
  selector: 'app-productcollection',
  templateUrl: './productcollection.component.html',
  styleUrls: ['./productcollection.component.scss'],
})
export class ProductcollectionComponent implements OnInit {
  @Input() products: ReadonlyArray<products> = [];
  @Output() remove = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}
}
