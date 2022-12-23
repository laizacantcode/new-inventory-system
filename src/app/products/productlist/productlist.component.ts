import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { products } from '../product.model';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {
  @Input() products: ReadonlyArray<products> = [];
  @Output() add = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {

  }

}
