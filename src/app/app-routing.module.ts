import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {NuevoComponent} from "../app/Producto/nuevo/nuevo.component";
import {ListarComponent} from "../app/Producto/listar/listar.component";
import {AppComponent} from "../app/app.component"
const routes: Routes = [
  {path:'listar', component:ListarComponent},
  {path:'nuevo', component:NuevoComponent},
  {path:'list', component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
