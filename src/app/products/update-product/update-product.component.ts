import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CategoriesService } from 'src/app/services/categories.service';
import { Articulo } from 'src/app/models/articulo';
import { Categoria } from 'src/app/models/categoria';
import { Precio } from 'src/app/models/precio';
import { ActivatedRoute } from '@angular/router';

interface Estados {
  value: boolean;
  viewValue: string;
}
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  data : Articulo = new Articulo
  categorias: Array<Categoria>
  estados: Estados[] = [
    {value: true, viewValue: 'activo'},
    {value: false, viewValue: 'inactivo'},
  ];
  id: number
  errors :[]

  listaPrecios = ""

  constructor(private productsService : ProductsService, private categoriesService: CategoriesService, private route: ActivatedRoute,) { 

  }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params => {
      console.log(+params.get('productId'));
      
      this.productsService.getAProduct(+params.get('productId')).subscribe(product => {console.log(this.data = product, this.id = product.id)
        this.mapPrices()})
    })
    this.categoriesService.getCategories().subscribe(categorias => console.log(this.categorias = categorias.data))
    

  }
  mapPrices(){
    console.log("mapping");
    
    if(this.data.precios.length>1){
      this.data.precios.map(e=> this.listaPrecios+= e.precio + ',')
    }
    else{
      this.data.precios.map(e=> this.listaPrecios+= e.precio)
    }
  }
  updateProduct(id){
    this.data.precios = this.listaPrecios.split(',').map(el => new Precio(parseInt(el)))
    this.productsService.updateProduct(id, this.data).subscribe(suc => console.log(suc), err => this.errors = err)
  }

}
