import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/service.index';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styles: []
})
export class RootComponent implements OnInit {
  

  constructor(private getEmpresas: LoginService) { }
  ngOnInit() {
   
  }

}
