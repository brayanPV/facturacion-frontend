import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';

@Component({
    selector: 'selector-name',
    templateUrl: './detalles.component.html'
})

export class DetallesComponent implements OnInit {
    public titulo:string = 'Detalles del cliente';
    public cliente: Cliente = new Cliente();
    constructor(private activatedRoute: ActivatedRoute, private clienteService: ClienteService) { }

    ngOnInit() {
        this.cargarCliente();
     }

    public cargarCliente(): void{
        this.activatedRoute.params.subscribe(params => {
            let id = params['id'];
            if(id){
                this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
            }
        });
    }
}
