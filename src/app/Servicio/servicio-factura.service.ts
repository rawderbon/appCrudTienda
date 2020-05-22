import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from '../Modelo/factura';
import { Observable } from 'rxjs';
import { Item } from '../Modelo/item';
import { ServicioService } from './servicio.service';

@Injectable({
  providedIn: 'root'
})
export class ServicioFacturaService {
  facturasUrl : string;
  itemsUrl : string;
  calculo : string;
  
  constructor(private http: HttpClient,private servicios:ServicioService) {
    this.facturasUrl =  'http://localhost:8080/facturas';
    this.itemsUrl =  'http://localhost:8080/items';
    
   }

  public guardarFactura(factura: Factura){
    this.servicios.enviarFactura(factura);
    return this.http.post<Factura>(this.facturasUrl, factura);
  }
  public getFacturas(): Observable<Factura[]>{
    return this.http.get<Factura[]>(this.facturasUrl);
  }

  public guardarItmes(items: Item[]){
    
    return this.http.post<Item[]>(this.itemsUrl, items);
  }

}
