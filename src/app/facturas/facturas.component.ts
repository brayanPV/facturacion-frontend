import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '../clientes/cliente';
import { ItemFactura } from '../itemfacturas/itemfactura';
import { Factura } from './factura';
import { FacturaService } from './factura.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html'
})
export class FacturasComponent implements OnInit {
  public titulo: string = 'Factura: ';
  public datosCliente: string = 'Datos del cliente';
  public datosFactura: string = 'Datos de la factura';
  public factura: Factura = new Factura();
  public cliente: Cliente = new Cliente();
  public items: ItemFactura[];
  constructor(private activatedRoute: ActivatedRoute, private facturaService: FacturaService) { }

  ngOnInit() {
    this.cargarFactura();
    this.cargarCliente();
    this.cargarItems();
  }

  public cargarFactura(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.facturaService.getFactura(id).subscribe((factura) => this.factura = factura);
      }
    });
  }

  public cargarCliente(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.facturaService.getCliente(id).subscribe((cliente) => this.cliente = cliente);
      }
    });
  }

  public cargarItems(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.facturaService.getItems(id).subscribe((items) => this.items = items);
      }
    });
  }

}
