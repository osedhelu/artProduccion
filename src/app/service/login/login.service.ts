import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { env } from '../../config/env';
import notify from 'devextreme/ui/notify';
import { fnLocal } from '../../_function/localStorage.fn';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  status:boolean = false
  constructor(private http: HttpClient) { }

  getEmpresa() {
    let url = `${env.url1}/sql`
    return this.http.post(url, {action : 'get_empresa', pass: ''}).pipe(
      map((resp: any) => resp.data),
      catchError(err => throwError(err)));
  }
  initSession(user) {
    
    let url = `${env.url1}/login`;
    
    return this.http.post(url, user).pipe(
      map((resp: any) => {
        fnLocal.agregar('token', resp.data);
        notify("Bienvenidos a Artdecon", "success", 3000);
        return resp.ok; 
      }),
      catchError((err: any) => {
        notify(err.error.error.message, "error", 2000);
        this.status = err.error.error.ok 
        console.log(err.error.error.message);
        fnLocal.remove('token')
        return throwError(err.error)
      })
    )
  }
  validateToken(token) {
    let url = `${env.url1}/login`;
    return this.http.put(url, {token}).toPromise();
  }
}
