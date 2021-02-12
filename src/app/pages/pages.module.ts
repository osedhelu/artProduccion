import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, FooterModule, LoginFormModule } from '../shared/components';
import { AuthGuardService } from '../shared/services';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { InitComponent } from './init/init.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from '../layouts';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductoComponent } from './producto/producto.component';
import { ServiceModule } from "../service/service.module";
import { DevexpressModule } from '../devexpress/devexpress.module';
import { BCostosComponent } from './bcostos/bcostos.component';
import { ManoObraComponent } from './mano-obra/mano-obra.component';
import { CifComponent } from './cif/cif.component';
import { SeccionesComponent } from './secciones/secciones.component';
const routes: Routes = [
  {
    path: '', component: InitComponent,
    children:[
      {
        path: 'display-data',
        component: DisplayDataComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'profile',
        component: ProfileComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'dashboard',
        component: HomeComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'login-form',
        component: LoginFormComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'categorias',
        component: CategoriasComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'productos',
        component: ProductoComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'Bcostos',
        component: BCostosComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'ManoObra',
        component: ManoObraComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'cif',
        component: CifComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'secciones',
        component: SeccionesComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: '**',
        redirectTo: 'dashboard',
        canActivate: [ AuthGuardService ]
      }
    ]
  }
  
];

@NgModule({
  imports: [
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    BrowserModule,
    LoginFormModule,
    RouterModule.forChild(routes), 
    DevexpressModule,
    ServiceModule,
  ],
providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [
    HomeComponent
    , ProfileComponent
    , DisplayDataComponent
    , InitComponent
    , CategoriasComponent
    , ProductoComponent
    , BCostosComponent
    , ManoObraComponent
    , CifComponent
    , SeccionesComponent]
})
export class PagesModule { }
