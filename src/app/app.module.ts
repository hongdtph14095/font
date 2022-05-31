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
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './conponemnts/header/header.component'
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzTableModule } from 'ng-zorro-antd/table';
import { LoginComponent } from './login/login.component';
registerLocaleData(en);
@NgModule({
  declarations: [
   AppComponent,
    HelloComponent,
    AboutComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent,
    NotFoundComponent,
    HomeComponent,
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzMenuModule,
    NzTableModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }