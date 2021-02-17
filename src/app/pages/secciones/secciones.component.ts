import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/service/service.index';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {

  constructor(private _service: ServiciosService) {
    console.log("hola");
   
   }

  ngOnInit() {
     this._service.listen('messages').subscribe(resp => {
      console.log(resp);
    })
    this.getSecciones()
  }
getSecciones() {
  this._service.getServicios().subscribe(err => {
    console.log(err);
  })
}
}
