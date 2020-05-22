import { Item } from './item';

export class Factura {
    cliente:string;
    valor_total:number;
    items:Item[];

    constructor(clien:string,valor:number,items:Item[]){
        this.cliente=clien;
        this.valor_total=valor;
        this.items=items;
    }
   
}


