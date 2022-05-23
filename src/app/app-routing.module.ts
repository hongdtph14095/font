import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './conponemnts/about/about.component';
import { HelloComponent } from './conponemnts/hello/hello.component';
import { ProductDetailComponent } from './conponemnts/product-detail/product-detail.component';

const routes: Routes = [
  { path: "product/:id", component: ProductDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }