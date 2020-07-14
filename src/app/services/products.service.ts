import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from "../models/response";
import { Articulo } from '../models/articulo';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private endpoit = 'http://visorus.ddns.net:8091/articulo'

  constructor( private http: HttpClient) { }

  getProduct() {

    return this.http.get<Response>(this.endpoit)
  }

  createProduct(newProduct: Articulo){
    return this.http.post(this.endpoit,newProduct)
  }
  deleteProduct(idc:number){
    let id = idc
    return this.http.delete(this.endpoit+"/"+id)
  }
  getAProduct(num : number) {

    return this.http.get<Articulo>(this.endpoit+"/"+num)
  }
  updateProduct(id, newval: Articulo){
    return this.http.put<Articulo>(this.endpoit+"/"+id, newval)
  }
}
