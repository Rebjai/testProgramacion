import { Component, OnInit } from '@angular/core';
import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Precio } from 'src/app/models/precio';
interface Estados {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  data : Articulo = new Articulo
  categorias: Array<Categoria>
  estados: Estados[] = [
    {value: true, viewValue: 'activo'},
    {value: false, viewValue: 'inactivo'},
  ];
  listaPrecios = ""

  constructor(private productsService : ProductsService, private categoriesService: CategoriesService) { 

  }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(categorias => console.log(this.categorias = categorias.data))
  }
  createProduct(){
    this.data.precios = this.listaPrecios.split(',').map(el => new Precio(parseInt(el)))
    this.productsService.createProduct(this.data).subscribe(err => console.log(err))
  }

}
