
import { Component, HostBinding } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { AuthService, ScreenService, AppInfoService } from '../../shared/services';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styles: []
})
export class InitComponent  {
  @HostBinding('class') get getClass() {
    return Object.keys(this.screen.sizes).filter(cl => this.screen.sizes[cl]).join(' ');
  }
  title:string = '';
  constructor(
      private authService: AuthService
    , private screen: ScreenService
    , public appInfo: AppInfoService
    , private router: Router) {this.getTitlePagina() }

  isAutorized() {
    return this.authService.isLoggedIn;
  }

  getTitlePagina() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter(event => (event as ActivationEnd).snapshot.firstChild === null),
      map(event => (event as ActivationEnd).snapshot.data)
    ).subscribe(children => this.title = children.title) 
  }
}
