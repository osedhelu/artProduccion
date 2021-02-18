import { Component, OnInit } from '@angular/core';
import { ProductionParametersService } from 'src/app/service/service.index';
import { ManoObra } from '../../_class/bcosto.class'
@Component({
  selector: 'app-mano-obra',
  templateUrl: './mano-obra.component.html',
  styleUrls: ['./mano-obra.component.scss']
})
export class ManoObraComponent implements OnInit {
  datos: ManoObra[] = [];
  isLoading = false;
  loadPanelPosition = { of: '#gridContainer' };
  seelctTipo=['$', '%'];
  seelctEstados=["ACTIVO", 'INACTIVO'];
  SelectUm: any[] = []
  constructor(private _cservice: ProductionParametersService) { }

  ngOnInit() {
  this.getList()
  this.getUnidadMEdida();
  // this.initSocket()
  }
  getList() {
    this.isLoading = true;
    this._cservice.getManosObra().then(({data}: any )=> {
      this.datos = data;
      this.isLoading = false
      console.log(data);
    })
  }
  getUnidadMEdida() {
    this._cservice.getUndedida().then(({data}: any) => {
      console.log(data);
      this.SelectUm = data
    }) 
  }
  onInitNewRow(e) {
    console.log(e.data);

  }
  update(e) {
    console.log(e);
  }
  // initSocket(){
  //   const socket = socketIo('http://192.168.10.11:6001')
  //   socket.on('hello', (resp => {
  //     console.log(resp);
  //   }))
  // }
}
