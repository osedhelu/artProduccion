import { Component, OnInit } from '@angular/core';
import { FnUserService } from 'src/app/service/service.index';
import { Bases_consto } from '../../_class/bcosto.class';
import notify from 'devextreme/ui/notify';

@Component({
  selector: 'app-bcostos',
  templateUrl: './bcostos.component.html',
  styleUrls: ['./bcostos.component.scss']
})
export class BCostosComponent implements OnInit {
  companies: Bases_consto[];
  itemCount: number;
  company: Bases_consto;
  expression = false;
  items: Bases_consto;
  constructor(private _Bcosto: FnUserService) { }
  ngOnInit() {
    this.getCompanies()
  }
  getCompanies() {
    this._Bcosto.getDominios().then((x: any) => {
      this.companies = x.data.todos;
      this.itemCount = x.data.length; 
      x.data.todos.map(resp => {
        if(resp.VALOR2 === x.data.CODIGO){
          this.expression = true
          this.items = resp
        }
      })
    })  
  }
  getacction(e) {
    this.expression = true
    this.items = e.value;
    
    this._Bcosto.updateDominios(
      e.value.VALOR2
      , e.value.ID_GRUPO_DOMINIO
      , e.value.VALOR3).then((resp:any) => {
        notify(`Actualizar ${resp.data[0].DESCRIPCION}`, "success", 2000);
      })
    
  }
}
