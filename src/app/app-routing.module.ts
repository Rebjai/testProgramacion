import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import { CreateProductComponent } from './products/create-product/create-product.component';


const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'categories', component: CategoryComponent },
  { path: 'create-category', component: CreateCategoryComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'create-product', component: CreateProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
