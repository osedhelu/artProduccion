import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from 'src/app/service/service.index';
import { EmpleadosClass } from '../../_class/empleados.class';
@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrls: ['./empleados.component.scss']
})
export class EmpleadosComponent implements OnInit {

  constructor(private _empleadoService: EmpleadosService) { }
  empleadosDB: EmpleadosClass[] = []
  ngOnInit() {
    this._empleadoService.ListAll().subscribe((resp: EmpleadosClass[]) => {
    this.empleadosDB = resp;
    })
  }
}
