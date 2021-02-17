import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../config/env';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductionParametersService {

  constructor(private http: HttpClient) { }

  getManosObra() {
    let url = `${env.url1}/sql`;
    return this.http.post(url, {action: 'Mano_de_obra', id_unidad: '00'} ).toPromise();
  }
  getUndedida() {
    let url = `${env.url1}/sql`
    return this.http.post(url, {action: 'unidad_medida', id_unidad:'00'}).toPromise();
  }
  getCif() {
    let url = `${env.url1}/sql`
    return this.http.post(url, {action: 'getCif', id_unidad:'00'}).pipe(
      map((resp:any) => resp.data),
      catchError(err => throwError(err)));
  }
}
