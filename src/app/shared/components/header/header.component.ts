import { Component, NgModule, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '../../services';
import { UserPanelModule } from '../user-panel/user-panel.component';

import { ActivationEnd, Router } from '@angular/router';
import { DevexpressModule } from 'src/app/devexpress/devexpress.module';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  @Output()
  menuToggle = new EventEmitter<boolean>();

  @Input()
  menuToggleEnabled = false;

  title: string;

  userMenuItems = [{
    text: 'Profile',
    icon: 'user',
    onClick: () => {
      this.router.navigate(['profile'])

    }
  }, {
    text: 'Logout',
    icon: 'runner',
    onClick: () => {
      this.authService.logOut();
    }
  }];

  constructor(private authService: AuthService, public router: Router) {
    this.getTitlePagina()
   }

  toggleMenu = () => {
    this.menuToggle.emit();
  }
  getTitlePagina() {
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      filter(event => (event as ActivationEnd).snapshot.firstChild === null),
      map(event => (event as ActivationEnd).snapshot.data)
    ).subscribe(children => this.title = children.title) 
  }
}

@NgModule({
  imports: [
    CommonModule,
    UserPanelModule,
    DevexpressModule
  ],
  declarations: [ HeaderComponent ],
  exports: [ HeaderComponent ]
})
export class HeaderModule { }
