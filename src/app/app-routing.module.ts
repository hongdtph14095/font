import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './conponemnts/about/about.component';
import { HelloComponent } from './conponemnts/hello/hello.component';
import { ProductAddComponent } from './conponemnts/product-add/product-add.component';
import { ProductDetailComponent } from './conponemnts/product-detail/product-detail.component';
import { ProductsComponent } from './conponemnts/products/products.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: 'product', component: ProductsComponent },
  { path: "product/add", component: ProductAddComponent },
  { path: "product/:id", component: ProductDetailComponent },
  { path: "product/edit/:id", component: ProductAddComponent },
  { path: "**", component: NotFoundComponent },
  {path : "login", component : LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }