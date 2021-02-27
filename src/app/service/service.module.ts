import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig  } from 'ngx-socket-io';
import { env } from '../config/env';
import { CategoryService
  , ProductoService
  , LoginService
  , FnUserService
  , ProductionParametersService
  , ServiciosService
  , EmpleadosService
  , MaquiEquipoService
} from "./service.index";
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from '../shared/services';
const config: SocketIoConfig = { url: env.socket, options: {} };

@NgModule({
  declarations: [],
  imports: [
    CommonModule
    , HttpClientModule
    , SocketIoModule.forRoot(config)
  ], 
  providers: [
    CategoryService
    , ProductoService
    , LoginService
    , FnUserService
    , ProductionParametersService
    , ServiciosService
    , AuthGuardService
    , EmpleadosService
    , MaquiEquipoService

  ]
})
export class ServiceModule { }
