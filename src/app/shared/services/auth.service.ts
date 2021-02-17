import { fn } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { LoginService } from 'src/app/service/service.index';
import { fnLocal } from '../../_function/localStorage.fn';
@Injectable()
export class AuthService {
  loggedIn = true;

  constructor(
    private router: Router,
    private login: LoginService 
  ) {
    let user = fnLocal.get('token');
    if(!user) {
      this.loggedIn = false;
    }else {
      this.login.validateToken(user.token).then((resp: any) => {
        this.loggedIn = resp.ok;
        // this.router.navigate(['/']);
      }).catch(err => {
        this.loggedIn = false;
        console.log(err);
        
        fnLocal.remove('token')
      })
      
    }
  }

  logIn(status) {
    this.loggedIn = status;
    this.router.navigate(['/']);
  }

  logOut() {
    this.loggedIn = false;
    fnLocal.remove('token')
    this.router.navigate(['/login-form']);
  }

  get isLoggedIn() {
    let aa = fnLocal.get('token');
    // if(aa.token) {
    //   return true
    // }else {
    //   return false;

    // }
    return this.loggedIn
  }
}

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private authService: AuthService) {}

    canActivate(route: ActivatedRouteSnapshot): boolean {
        const isLoggedIn = this.authService.isLoggedIn;
        const isLoginForm = route.routeConfig.path === 'login-form';

        if (isLoggedIn && isLoginForm) {
            this.router.navigate(['/']);
            return false;
        }

        if (!isLoggedIn && !isLoginForm) {
            this.router.navigate(['/login-form']);
        }

        return isLoggedIn || isLoginForm;
    }
}
