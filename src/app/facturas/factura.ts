import { Cliente } from "../clientes/cliente";
import { ItemFactura } from "../itemfacturas/itemfactura";

export class Factura {
    id: number;
    descripcion: string;
    observacion?: string;
    createAt: string;
    total: number;
    cliente: Cliente[];
    items: ItemFactura[];
}
