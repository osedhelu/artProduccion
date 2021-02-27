import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, FooterModule, LoginFormModule } from '../shared/components';
import { AuthGuardService } from '../shared/services';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { DisplayDataComponent } from './display-data/display-data.component';
import { InitComponent } from './init/init.component';
import { 
  SideNavOuterToolbarModule
  , SideNavInnerToolbarModule
  , SingleCardModule 
} from '../layouts';
import { BrowserModule } from '@angular/platform-browser';
import { CategoriasComponent } from './categorias/categorias.component';
import { ProductoComponent } from './producto/producto.component';
import { ServiceModule } from "../service/service.module";
import { DevexpressModule } from '../devexpress/devexpress.module';
import { BCostosComponent } from './bcostos/bcostos.component';
import { ManoObraComponent } from './mano-obra/mano-obra.component';
import { CifComponent } from './cif/cif.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { MaquiEquipoComponent } from './maqui-equipo/maqui-equipo.component';
import { RutasProduccionComponent } from './rutas-produccion/rutas-produccion.component';
import { MatrizComponent } from './matriz/matriz.component';
const routes: Routes = [
  {
      path: ''
    , component: InitComponent
    , children:[
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
        data:{title: 'Dashboard'},
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
        data:{title: 'Bases del Costo'},
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'ManoObra',
        data:{title: 'Mano de Obra'},
        component: ManoObraComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'cif',
        data: {title:'CIF'},
        component: CifComponent,
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'secciones',
        component: SeccionesComponent,
        data: {title: 'Secciones'},
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'SeccionEmpleados',
        component: EmpleadosComponent,
        data: {title: 'Empleados Secciones'},
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'MaquinaEquipo',
        component: MaquiEquipoComponent,
        data: {title: 'Maquinaria y Equipo'},
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'rutaproduccion',
        component: RutasProduccionComponent,
        data: {title: 'Rutas de Producción'},
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'matriz',
        component: MatrizComponent,
        data: {title: 'Rutas de Producción'},
        canActivate: [ AuthGuardService ]
      },
      {
        path: 'matriz',
        component: MatrizComponent,
        data: {title: 'Rutas de Producción'},
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
    SideNavOuterToolbarModule
    , SideNavInnerToolbarModule
    , SingleCardModule
    , FooterModule
    , BrowserModule
    , LoginFormModule
    , RouterModule.forChild(routes)
    , DevexpressModule
    , ServiceModule
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
    , SeccionesComponent
    , EmpleadosComponent
    , MaquiEquipoComponent
    , RutasProduccionComponent
    , MatrizComponent
  ]
})
export class PagesModule { }
