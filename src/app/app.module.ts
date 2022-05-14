import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './conponemnts/header/header.component';
import { AboutComponent } from './about/about.component';
import { HelloComponent } from './hello/hello.component';
import { ProductsComponent } from './conponemnts/products/products.component';
import { ProductDetailComponent } from './conponemnts/product-detail/product-detail.component';
import { ProductAddComponent } from './conponemnts/product-add/product-add.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    HelloComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductAddComponent
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