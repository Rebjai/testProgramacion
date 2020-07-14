import { Categoria } from "./categoria";
import { Precio } from "./precio";
export class Articulo {
    clave:string
    categoria:Categoria
    nombre:string
    precios: Array<Precio> 
    activo: boolean  = true
    id:number
}
