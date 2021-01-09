import { Injectable } from '@angular/core';
import { Cliente } from './cliente';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class ClienteService{
    private urlEndpoint: string = 'http://localhost:8080/clientes/';
    private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
    
    constructor(private http: HttpClient, private router: Router){ }

    public getClientes(): Observable<Cliente[]>{
        console.log("entra a service")
        return this.http.get<Cliente[]>(this.urlEndpoint);
    }

    public create(cliente: Cliente): Observable<any>{
        return this.http.post<any>(this.urlEndpoint, cliente, {headers: this.httpHeaders}).pipe(
            catchError(e => {
                if(e.status == 400){
                    return throwError(e);
                }
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(e);
            })
        );
    }

    public getCliente(id): Observable<Cliente>{
        return this.http.get<Cliente>(`${this.urlEndpoint}/${id}`).pipe(
            catchError(e=>{
                this.router.navigate(['/clientes']);
                console.error(e.error.mensaje);
                Swal.fire('Error', e.error.mensaje, 'error');
                return throwError(e);
            })
        );
    }

    public update(cliente: Cliente): Observable<Cliente>{
        return this.http.put(`${this.urlEndpoint}/${cliente.id}`, cliente, {headers: this.httpHeaders}).pipe(
            map((response: any) => response.cliente as Cliente),
            catchError(e => {
                if(e.status ==400){
                    return throwError(e);
                }
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(e);
            })
        );
    }

    public delete(id): Observable<Cliente>{
        return this.http.delete<Cliente>(`${this.urlEndpoint}/${id}`, {headers: this.httpHeaders}).pipe(
            catchError(e =>{
                console.error(e.error.mensaje);
                Swal.fire(e.error.mensaje, e.error.error, 'error');
                return throwError(e);
            })
        );
    }
}