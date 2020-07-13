import { Component, OnInit } from '@angular/core';
import { ProductsService } from "../services/products.service";
import { Articulo } from "../models/articulo";
import { Categoria } from '../models/categoria';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Array<Articulo>
  categorias: Array<Categoria>
  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProduct().subscribe(products => console.log(this.products = products.data))
  }
  deleteProduct(id) {
    let conf = confirm(`seguro que desea eliminar ${id}?`)
    if (conf)
      this.productService.deleteProduct(id).subscribe(err => console.log(err))
    this.refreshProducts()
  }
  async refreshProducts() {
    await this.productService.getProduct().subscribe(products => console.log(this.products = products.data))
  }

}
