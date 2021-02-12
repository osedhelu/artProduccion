import { Component, OnInit } from '@angular/core';
import { FnUserService } from 'src/app/service/service.index';
import { Bases_consto } from '../../_class/bcosto.class';
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
  items: any;
  constructor(private _Bcosto: FnUserService) { }
  ngOnInit() {
    this.getCompanies()
  }
  getCompanies() {
    this._Bcosto.getDominios().then((resp: any) => {
      this.companies = resp.data.todos;
      this.itemCount = resp.data.length; 
      console.log(resp.data);
    })  
    this.items = 1
    console.log(this.items);
  }
  getacction(e) {
    console.log(this.items);

    this.expression = true
    let { ID_DOMINIO, 
          ID_GRUPO_DOMINIO,
          ITEM,
          VALOR1,
          VALOR2,
          VALOR3,
          VALOR4} = e.value;
          this.company = e.value;
    // console.log(ID_DOMINIO);
    
  }
}
