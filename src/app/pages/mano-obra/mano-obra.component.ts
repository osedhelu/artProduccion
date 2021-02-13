import { Component, OnInit } from '@angular/core';
import { ProductionParametersService } from 'src/app/service/service.index';
import { ManoObra } from '../../_class/bcosto.class';
@Component({
  selector: 'app-mano-obra',
  templateUrl: './mano-obra.component.html',
  styleUrls: ['./mano-obra.component.scss']
})
export class ManoObraComponent implements OnInit {
  datos: ManoObra[] = [];
  constructor(private _service: ProductionParametersService) { }

  ngOnInit() {
  this.getList()
  }
  getList() {
    this._service.getManosObra().then(({data}: any )=> {
      this.datos = data;
      console.log(data);
    })
  }
}
