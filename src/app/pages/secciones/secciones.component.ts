import { Component, OnInit } from '@angular/core';
import { ServiciosService } from 'src/app/service/service.index';
import { ClassSecciones } from 'src/app/_class/bcosto.class';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {
  seccionesEmpresa: ClassSecciones[] = [] 
  constructor(private _service: ServiciosService) {   }

  ngOnInit() {
     this._service.listen('new-message').subscribe(resp => {
      console.log(resp);
    })
    this.getSecciones()
  }
getSecciones() {
  this._service.getServicios().subscribe((resp: ClassSecciones[]) => {
    this.seccionesEmpresa = resp
  })
}
}
