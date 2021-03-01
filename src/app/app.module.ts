import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { RootComponent } from './root/root.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { RouterModule, Routes } from '@angular/router';
import { PagesModule } from './pages/pages.module';


const appRoutes: Routes = [
  { path: '**', component: NopagefoundComponent }
];



@NgModule({
  declarations: [
    RootComponent,
    NopagefoundComponent,
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
