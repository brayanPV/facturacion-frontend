import { Producto } from "../productos/producto";

export class ItemFactura {
    id: number;
    cantidad: number;
    total: number;
    producto: Producto;
}