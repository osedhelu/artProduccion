import { Component, OnInit, ViewChild } from '@angular/core';
import { DxScrollViewComponent } from 'devextreme-angular';
import { ServiciosService } from 'src/app/service/service.index';
import { ClassSecciones } from 'src/app/_class/bcosto.class';

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
  this.labelLocation = "top";
  this.readOnly = false;
  this.showColon = true;
  this.minColWidth = 300;
  this.colCount = 2;
  this.Empresa = event.data 
  console.log(event.data);
}
valueChanged(dd) {
 console.log(dd); 
}
}
