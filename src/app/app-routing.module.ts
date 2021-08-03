import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductUpComponent } from './product-up/product-up.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: ProductComponent },
  { path: 'categories', component: CategoriesComponent },
  { path: 'product-add', component: ProductAddComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'productDetail/:id', component: ProductDetailComponent },
  { path: 'productUpdate/:id', component: ProductUpComponent },


  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
