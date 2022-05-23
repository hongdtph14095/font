import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './conponemnts/hello/hello.component';
import { AboutComponent } from './conponemnts/about/about.component';
import { ProductsComponent } from './conponemnts/products/products.component';
import { FormsModule } from '@angular/forms';
import { ProductAddComponent } from './conponemnts/product-add/product-add.component';
import { ProductDetailComponent } from './conponemnts/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    AboutComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }