
import { Component, HostBinding } from '@angular/core';
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

  constructor(private authService: AuthService, private screen: ScreenService, public appInfo: AppInfoService) { }

  isAutorized() {
    return this.authService.isLoggedIn;
  }
}
