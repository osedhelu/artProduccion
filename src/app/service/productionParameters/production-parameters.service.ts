import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../config/env';
@Injectable({
  providedIn: 'root'
})
export class ProductionParametersService {

  constructor(private http: HttpClient) { }

  getManosObra() {
    let url = `${env.url1}/sql`;
    return this.http.post(url, {action: 'Mano_de_obra', id_unidad: '00'} ).toPromise()
  }
}
