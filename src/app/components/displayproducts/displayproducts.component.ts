import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interface/products';
import { InventoryService } from 'src/app/service/inventory.service';
import { Store } from '@ngrx/store';


@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.scss'],
})
export class DisplayproductsComponent implements OnInit {
  productList!: Observable<Products[]>;

  constructor(private service: InventoryService) {
  }

  ngOnInit(): void {
    this.productList = this.service.displayProducts();
  }
  
  delete(productID: number) {
    this.service.delete(productID);
  }



}
