import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../../config/env';
@Injectable({
  providedIn: 'root'
})
export class FnUserService {

  constructor(private http: HttpClient) { }

  getDominios() {
    let url = `${env.url1}/sql`;
    return this.http.post(url, {action:'get_dominios', id_unidad: '00'}).toPromise();
  }
}
