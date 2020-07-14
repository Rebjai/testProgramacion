import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/models/categoria';
import { CategoriesService } from 'src/app/services/categories.service';

interface Estados {
  value: boolean;
  viewValue: string;
}
@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {
  data: Categoria= new Categoria
  errors: []
  estados: Estados[] = [
    {value: true, viewValue: 'activo'},
    {value: false, viewValue: 'inactivo'},
  ];
  constructor(private categoriesService : CategoriesService) { }

  ngOnInit(): void {
  }
  updateProduct(id){
    
    this.categoriesService.updateCategory(id, this.data).subscribe(suc => console.log(suc), err => this.errors = err)
  }

}
