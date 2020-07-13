import { Component, OnInit } from '@angular/core';
import { CategoriesService } from "../services/categories.service";
import { Categoria } from "../models/categoria";
// import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  // providers:[CreateDialogComponent]
})
export class CategoryComponent implements OnInit {
  categories: Array<Categoria>

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
    this.refreshCategories()
  }
  deleteCategory(id) {
    let conf = confirm(`seguro que desea eliminar ${id}?`)
    if (conf)
      this.categoriesService.deleteCategory(id).subscribe(err => console.log(err))
    this.refreshCategories()
  }
  openCreateCategoryDialog() {
    // this.dialog.open(CreateDialogComponent, {data: new Categoria})


  }
  refreshCategories() {
    this.categoriesService.getCategories().subscribe(categorias => console.log(this.categories = categorias.data))
  }

}
