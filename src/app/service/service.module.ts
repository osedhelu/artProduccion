import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryService
  , ProductoService
  , LoginService
  , FnUserService
  , ProductionParametersService
} from "./service.index";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ], 
  providers: [
    CategoryService
    , ProductoService
    , LoginService
    , FnUserService
    , ProductionParametersService
  ]
})
export class ServiceModule { }
