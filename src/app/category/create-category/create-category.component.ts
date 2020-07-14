import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriesService } from 'src/app/services/categories.service';
interface Estados {
  value: boolean;
  viewValue: string;
}

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  data: Categoria= new Categoria
  errors: []
  estados: Estados[] = [
    {value: true, viewValue: 'activo'},
    {value: false, viewValue: 'inactivo'},
  ];
  constructor( private categoriesService : CategoriesService) { }

  ngOnInit(): void {
  }
  async createCategory(){
    console.log("creating new category: ",this.data);

    await this.categoriesService.createCategory(this.data).subscribe(err=>console.log(err), err => console.log(this.errors = err.error.errores))
  }
  logDate(){
    console.log(this.data.fechaCreado);
    
  }

}
