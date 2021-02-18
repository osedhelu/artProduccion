import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { RootComponent } from './root/root.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';
import { CrudNavigationComponent } from './shared/crud-navigation/crud-navigation.component';


const appRoutes: Routes = [
  { path: '**', component: NopagefoundComponent }
];



@NgModule({
  declarations: [
    RootComponent,
    NopagefoundComponent,
    CrudNavigationComponent
  ],
  imports: [
BrowserModule,
    RouterModule.forRoot(appRoutes, { useHash: true }),
    PagesModule
    
  ],
  providers: [AuthService, ScreenService, AppInfoService],
  bootstrap: [RootComponent]
})
export class AppModule { }
