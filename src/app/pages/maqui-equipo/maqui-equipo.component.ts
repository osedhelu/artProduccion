import { Component, OnInit, ViewChild } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import notify from 'devextreme/ui/notify';
import { MaquiEquipoService } from 'src/app/service/service.index';
import { Employee } from 'src/app/_class/maquina-Equipo.class';

@Component({
  selector: 'app-maqui-equipo',
  templateUrl: './maqui-equipo.component.html',
  styleUrls: ['./maqui-equipo.component.scss']
})
export class MaquiEquipoComponent  {
    @ViewChild(DxFormComponent, { static: false }) myform: DxFormComponent;
    employee: Employee;
    positions: string[];
    rules: Object;
    constructor(service: MaquiEquipoService) {
        this.employee = service.getEmployee();
        this.positions = service.getPositions();
        this.rules = { 'X': /[02-9]/ };
    }
    ngAfterViewInit() {
      this.myform.instance.validate()
  }
}
