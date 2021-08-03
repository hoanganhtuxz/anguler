import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoriesComponent } from './categories/categories.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpComponent } from './product-up/product-up.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsService } from './services/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoriesComponent,
    ProductAddComponent,
    ProductUpComponent,
    ProductDetailComponent,
    ProductListComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
