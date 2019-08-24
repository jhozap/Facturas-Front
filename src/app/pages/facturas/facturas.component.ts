import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/services/datos.service';
import { finalize } from 'rxjs/operators';
import { Facturas } from 'src/app/models/Facturas.class';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.scss']
})
export class FacturasComponent implements OnInit {

  Facturas: Array<Facturas> = [];

  constructor(private service: DatosService) { }

  ngOnInit() {
    this.getFacturas();
  }

  getFacturas() {
    this.service.getFacturas().pipe(
      finalize(() => {
      }))
      .subscribe(
        (data) => {
          console.log('Estas son las facturas');
          console.log(data);
          this.Facturas = data;
          console.log(this.Facturas);
        }, (error) => {
          console.log(error);
        }
      );
  }

}
