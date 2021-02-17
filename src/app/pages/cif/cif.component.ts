import { Component, OnInit } from '@angular/core';
import { ProductionParametersService } from 'src/app/service/service.index';
import { ClassCif } from 'src/app/_class/bcosto.class';

@Component({
  selector: 'app-cif',
  templateUrl: './cif.component.html',
  styleUrls: ['./cif.component.scss']
})
export class CifComponent implements OnInit {

  constructor(private _serviceCif: ProductionParametersService) { }
  data: ClassCif[] = [];
  isLoading = true;
  loadPanelPosition = { of: '#gridContainer' };
  ngOnInit() {
    this.getCif();
  }

  getCif() {
    this._serviceCif.getCif().subscribe((resp:ClassCif[]) => {
      this.data = resp;
      this.isLoading = false;
      console.log(resp);
    })
  }
  add(e) {

  }
  update(e){

  }
}
