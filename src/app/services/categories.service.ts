import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Categoria } from "../models/categoria";
import { Response } from "../models/response";


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private endpoit = 'http://visorus.ddns.net:8091/categoria'
  categorias: Array<Categoria>

  constructor(private http: HttpClient) { }

  getCategories() {

    return this.http.get<Response>(this.endpoit)
  }

  createCategory(newCategory: Categoria){
    return this.http.post(this.endpoit,newCategory)
  }
  deleteCategory(idc:number){
    let id = idc
    return this.http.delete(this.endpoit+"/"+id)
  }
  handleError(){

  }
  updateCategory(id, newval: Categoria){
    return this.http.put<Categoria>(this.endpoit+"/"+id, newval)
  }
}
