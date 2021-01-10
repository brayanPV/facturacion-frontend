import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
    selector: 'selector-name',
    templateUrl: './form.component.html'
})

export class FormComponent implements OnInit {
    
    public titulo:string= 'Crear Cliente';
    public cliente: Cliente = new Cliente();
    public errores: string[];
    constructor(private clienteService: ClienteService, private router: Router, private activatedRoute: ActivatedRoute) { 

    }


    ngOnInit():void { 
        this.cargarCliente();
    }
    
    public create():void {
        this.clienteService.create(this.cliente).subscribe(
            json => {
                this.router.navigate(['/clientes']);
                Swal.fire('Nuevo cliente', `${json.mensaje}: ${json.cliente.nombre}`, 'success');
            }
        )
    }

    public cargarCliente(): void{
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if(id){
                this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
            }
        });
    }

    public update(): void{
        this.clienteService.update(this.cliente).subscribe(
            cliente=>{
                this.router.navigate(['/clientes']);
                Swal.fire('Cliente actualizado', `Cliente ${cliente.nombre} actalizado con exito`, 'success');
            },
            err => {
                this.errores = err.error.error as string[];
                console.error("Error: " + err.status);
                console.error(err.error.error);
            }
        );
    }
}