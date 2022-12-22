import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../app/styles/material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ModalComponent } from './components/modal/modal.component';
import { ProductformComponent } from './components/productform/productform.component';

import { StoreModule } from '@ngrx/store';
import { productReducer } from './ngrx/reducer/product.reducer';
import { collectionReducer } from './ngrx/reducer/collection.reducer';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ModalComponent,
    ProductformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({product: productReducer, collection: collectionReducer}),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
