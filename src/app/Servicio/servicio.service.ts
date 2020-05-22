import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Producto} from '../Modelo/producto';
import { Item } from '../Modelo/item';
import { ServicioFacturaService } from './servicio-factura.service';
import { Factura } from '../Modelo/factura';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  
  productosUrl: string;//DEFINE LA URL DEL PROYECTO BACKEND
  factura:Factura;
  
  items:Item[] =[];//ALMACENA LOS ITEMS O DETALLES SELECCIONADOS DE LA FACTURA
  item : Item;     //VARIABLE PARA REALIZAR INSTANCIA DE LA CLASE ITEM Y USAR SU CONSTRUCTOR PARA CREAR LOS ITEM DE LA FACTURA
  constructor(private http: HttpClient) {

    this.productosUrl = 'http://localhost:8080/productos';
   
  }


  ///METODO PARA LISTAR TODOS LOS ELEMENTOS DE LA TABLA PRODUCTOS
  public findAll():  Observable<Producto[]> {
    return this.http.get<Producto[]>(this.productosUrl);
  }


  ///METODO PARA GUARDAR LOS ELEMENTOS DE LA TABLA PRODUCTOS
  public save(producto: Producto) {
    return this.http.post<Producto>(this.productosUrl, producto);
  }

  //METODO PARA ELIMINAR PRODUCTOS DE LA TABLA
  public delete(producto: Producto){
    return this.http.post<Producto>('http://localhost:8080/eliminarProducto', producto);
  }

   enviarFactura(factura:Factura){
     this.factura=factura;
  }
 //SELECCIONA LOS PRODUCTOS QUE FORMARAN PARTE DEL DETALLE DE LA FACTURA
  public seleccionarProducto(producto: Producto){
    
    let cant = window.prompt('Ha seleccionado'+' '+ producto.name +'\n'+'Digite la cantidad a comprar');//SOLICITA ENTRADA POR TECLADO DE LA CNTIDAD A COMPRAR
    this.item = new Item(producto,Number(cant),producto.valor*Number(cant),this.factura);

    this.items.push(this.item);
    
  }
}
