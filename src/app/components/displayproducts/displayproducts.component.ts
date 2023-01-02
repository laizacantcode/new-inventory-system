import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { observable, Observable } from 'rxjs';
import { Products } from 'src/app/interface/products';
import { InventoryService } from 'src/app/service/inventory.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-displayproducts',
  templateUrl: './displayproducts.component.html',
  styleUrls: ['./displayproducts.component.scss'],
})
export class DisplayproductsComponent implements OnInit, OnDestroy {
  productList!: Observable<Products[]>;
  @Output() currentData = new EventEmitter<Products>();
  @Output() view = new EventEmitter<Products>();
  constructor(private service: InventoryService, private http: HttpClient) {}

  ngOnInit(): void {
    this.productList = this.service.displayProducts();
  }

  delete(productID: number) {
    this.service.delete(productID);
  }

  updateProductInfo(productID: number) {
    this.service
      .getProductInfo(productID)
      .subscribe((res: Products) => this.currentData.emit(res)).unsubscribe;
  }

  viewProduct(productID: number) {
    this.service
      .getProductInfo(productID)
      .subscribe((res: Products) => this.view.emit(res)).unsubscribe;
  }
  ngOnDestroy(): void {
    
  }
}
