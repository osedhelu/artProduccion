import { Component, NgModule, Input } from '@angular/core';
import { DevexpressModule } from "../../../devexpress/devexpress.module";
import { fnLocal } from '../../../_function/localStorage.fn';
@Component({
  selector: 'app-user-panel',
  templateUrl: 'user-panel.component.html',
  styleUrls: ['./user-panel.component.scss']
})

export class UserPanelComponent {
  nombre: string = 'hola';
  @Input()
  menuItems: any;
  @Input()
  menuMode: string;

  constructor() {
    let aa = fnLocal.get('token')
    // console.log();
    this.nombre = aa.NOMBRE;
  }
}

@NgModule({
  imports: [
    DevexpressModule
  ],
  declarations: [ UserPanelComponent ],
  exports: [ UserPanelComponent ]
})
export class UserPanelModule { }
