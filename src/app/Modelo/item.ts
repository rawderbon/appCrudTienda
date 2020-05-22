import { Producto } from './producto';
import { Factura } from './factura';

export class Item {
    producto: Producto;
    cantidad: number;
    valor_total:number;
    factura: Factura;

    constructor(pro:Producto,cant:number,valor_total:number,fact:Factura){
        this.producto=pro;
        this.cantidad=cant;
        this.valor_total=valor_total;
        this.factura=fact;
    }

    
}
