import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { CategoryComponent } from './category/category.component';
import { ProductsComponent } from './products/products.component';

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ProductListComponent } from './products/product-list/product-list.component';
import { MatDialogModule } from '@angular/material/dialog';
import { CreateCategoryComponent } from './category/create-category/create-category.component';
import {MatSelectModule} from '@angular/material/select';
import { CreateProductComponent } from './products/create-product/create-product.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { UpdateProductComponent } from './products/update-product/update-product.component';
import { UpdateCategoryComponent } from './category/update-category/update-category.component';
// import { CreateDialogComponent } from './category/create-dialog/create-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductsComponent,
    ProductListComponent,
    CreateCategoryComponent,
    CreateProductComponent,
    UpdateProductComponent,
    UpdateCategoryComponent,
    // CreateDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  // entryComponents:[CreateDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
