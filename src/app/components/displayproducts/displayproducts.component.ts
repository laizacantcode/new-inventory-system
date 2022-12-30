import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/interface/products';
import { InventoryService } from 'src/app/service/inventory.service';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.scss'],
})
export class DisplayproductsComponent implements OnInit {
  productList!: Observable<Products[]>;
  @Output() currentData = new EventEmitter<Products>();
  @Output() view = new EventEmitter<Products>();
  constructor(private service: InventoryService) {}

  ngOnInit(): void {
    this.productList = this.service.displayProducts();
  }

  delete(productID: number) {
    this.service.delete(productID);
  }

  updateProductInfo(productID: number) {
    this.service
      .getProductInfo(productID)
      .subscribe((res: Products) => this.currentData.emit(res));
  }

  viewProduct(productID: number) {
    this.service
      .getProductInfo(productID)
      .subscribe((res: Products) => this.view.emit(res));
  }
}
