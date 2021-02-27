import { Component, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';
import { ServiciosService } from 'src/app/service/service.index';
import { ClassEmpleados, ClassSecciones } from 'src/app/_class/bcosto.class';

@Component({
  selector: 'app-secciones',
  templateUrl: './secciones.component.html',
  styleUrls: ['./secciones.component.scss']
})
export class SeccionesComponent implements OnInit {
  @ViewChild(DxScrollViewComponent, { static: false }) scrollView: DxScrollViewComponent;
  labelLocation: string;
    readOnly: boolean;
    showColon: boolean;
    minColWidth: number;
    colCount: number;
    width: any;
    Empleados: ClassEmpleados[] = [] 
  Empresa!: ClassSecciones;
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
    console.log(resp);
  })
}
screen(width) {
  return ( width < 700 ) ? 'sm' : 'lg';
}
SelectRow(event) {
  this.Empresa = event.data 
  this._service.getEmpleados(this.Empresa.ID_SECCION).then((resp: any) => {
    this.Empleados = resp.data;
  }).catch(err => {
    console.log(err);
  })
}
valueChanged(dd) {
 console.log(dd); 
}
}
