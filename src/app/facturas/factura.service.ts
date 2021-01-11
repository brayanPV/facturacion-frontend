import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { Factura } from './factura';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Cliente } from '../clientes/cliente';
import { ItemFactura } from '../itemfacturas/itemfactura';

@Injectable({
    providedIn: 'root'
})
export class FacturaService {
    private urlEndpoint: string = 'http://localhost:8080/facturas/';
    private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient, private router: Router) { }

    public getFacturas(): Observable<Factura[]> {
        return this.http.get<Factura[]>(this.urlEndpoint);
    }

    public getFactura(id): Observable<any> {
        return this.http.get<Factura>(`${this.urlEndpoint}/ver/${id}`, {headers: this.httpHeaders}).pipe(
            map((response: any) => response.factura as Factura),
            catchError(e => {
                this.router.navigate(['/facturas']);
                console.error(e.error.mensaje);
                Swal.fire('Error', e.error.mensaje, 'error');
                return throwError(e);
            })
        );
    }

    public getCliente(id): Observable<any> {
        return this.http.get<Cliente>(`${this.urlEndpoint}/ver/${id}`, {headers: this.httpHeaders}).pipe(
            map((response: any) => response.cliente as Cliente),
            catchError(e => {
                this.router.navigate(['/facturas']);
                console.error(e.error.mensaje);
                Swal.fire('Error', e.error.mensaje, 'error');
                return throwError(e);
            })
        );
    }

    public getItems(id): Observable<any> {
        return this.http.get<ItemFactura>(`${this.urlEndpoint}/ver/${id}`, {headers: this.httpHeaders}).pipe(
            map((response: any) => response.items as ItemFactura),
            catchError(e => {
                this.router.navigate(['/facturas']);
                console.error(e.error.mensaje);
                Swal.fire('Error', e.error.mensaje, 'error');
                return throwError(e);
            })
        );
    }

}