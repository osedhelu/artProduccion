import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { env } from '../../config/env';
@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(private http: HttpClient) { }
  ListAll() {
    let url = `${env.url1}/empleados`
    return this.http.get(url).pipe(
      map((resp:any) => resp.data),
      catchError(err => throwError(err))
    )
  }
}
