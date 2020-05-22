import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import { Producto } from 'src/app/Modelo/producto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  producto: Producto;
  constructor(
    private servicios:ServicioService,
    private router: Router, 
    
    ) {
    this.producto = new Producto();
   }

  ngOnInit(): void {
  }
  
  save(){
    this.servicios.save(this.producto).subscribe(result => this.gotoUserList());
  }
  gotoUserList() {
    this.router.navigate(['/listar']);
  }
}
