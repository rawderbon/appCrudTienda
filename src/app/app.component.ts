import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ServicioService } from './Servicio/servicio.service';
import { Item } from './Modelo/item';
import { Factura } from './Modelo/factura';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ServicioFacturaService } from './Servicio/servicio-factura.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  factura: Factura;
  form: FormGroup;
  title = 'appCrudTienda';
 
  item: Item;
  items: Item[];
  valorTotal = 0;

  constructor(
       private router: Router,
       private servicios: ServicioService,
       private servicioFacturas: ServicioFacturaService,
       private formB: FormBuilder) 
     {


      
      this.form = this.formB.group
      ({
        cliente: '',
        valor_total: this.valorTotal,
        items: this.formB.array([ ])
      })
      
  }

  //ESTE METODO CONVIERTE EL ARREGLO DE ITEMS EN UNA FORMARRAY PARA TRABAJAR CON FORMULARIO
  //DINAMICO REACTIVO
  get detalles() {
    return this.form.get('items') as FormArray;
  }
  //METODO PARA CAPTURAR LOS DATOS CORRESPONDIENTES AL DETALLE DE LA FACTURA
  addDetalle() {
      let detallesFormGroup = this.formB.group({
      producto: this.formB.group({
        id: this.servicios.item.producto.id,
        nombre: this.servicios.item.producto.name,
        valor: this.servicios.item.producto.valor
      }),
      cantidad: this.servicios.item.cantidad,
      valor_subtotal: this.servicios.item.valor_total,

    })

    this.detalles.push(detallesFormGroup);
  }

  
  removerDetalle(indice: number) {
    this.detalles.removeAt(indice);
  }

  ngOnInit() {
    this.items = this.servicios.items;
  }

  listar() {
    this.router.navigate(["listar"]);
  }

  guardarFactura() {

    this.valorTotal = 0;
    this.factura = this.form.value;

    this.items.forEach(it => this.valorTotal = this.valorTotal + it.valor_total);

    this.factura.valor_total = this.valorTotal;
    this.servicioFacturas.guardarFactura(this.factura)
      .subscribe(data => {}),
         this.servicioFacturas.guardarItmes(this.factura.items)
        .subscribe(data => {});
  }

  

cancelar() {
  
}
  
}
