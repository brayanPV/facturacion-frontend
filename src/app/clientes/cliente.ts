import { Factura } from "../facturas/factura";

export class Cliente {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    createAt: string;
    facturas: Factura[];
}
