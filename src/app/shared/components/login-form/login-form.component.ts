import { Component, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthService, AppInfoService } from '../../services';
import { DevexpressModule } from 'src/app/devexpress/devexpress.module';
import { LoginService } from 'src/app/service/service.index';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})

export class LoginFormComponent {
    id_usuario = '';
    password = '';
    code_empresa: any;
    Empresas: any[];
    data: any;
  constructor(
      private authService: AuthService, 
      public appInfo: AppInfoService,
      private _login: LoginService
      ) {
          this._login.getEmpresa().subscribe(resp => {
             this.Empresas = resp ;
          })
    // this.simpleProducts = this.getSimpleProducts();
   }

  onLoginClick(args) {
    if (!args.validationGroup.validate().isValid) {
      return;
    }
    let user = {
        cedula: this.id_usuario,
        password: this.password,
        code_empresa: this.code_empresa.ID_UN
    }
     
    this._login.initSession(user).subscribe(resp => {
        console.log(resp);
        this.authService.logIn(resp);
    })
    // args.validationGroup.reset();
  }

}
@NgModule({
  imports: [
    RouterModule,
    DevexpressModule
  ],
  declarations: [ LoginFormComponent ],
  exports: [ LoginFormComponent ]
})
export class LoginFormModule { }
