
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Products } from './interface/products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Input() product: ReadonlyArray<Products> = [];
  @Output() add = new EventEmitter<string>();
}
