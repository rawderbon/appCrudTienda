import { Component, OnInit } from '@angular/core';
import { ServicioService} from '../../Servicio/servicio.service';
import { Producto } from 'src/app/Modelo/producto';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  
  constructor(private Servicios: ServicioService,private router: Router,private app: AppComponent) { }
  productos: Producto[];
  items : [];
  ngOnInit(): void {
    this.Servicios.findAll().subscribe(data => {
      this.productos = data;
    });
  }

  nuevoProducto(){
    this.router.navigate(["nuevo"]);
  }
  seleccionar(produc){
    this.Servicios.seleccionarProducto(produc);
    this.app.addDetalle();
  }
  eliminar(produc){
    this.Servicios.delete(produc).subscribe(result=>{this.goToListar()} );
  }
  goToListar(){
    this.router.navigate(["listar"]);
  }
  
}
