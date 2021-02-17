import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { env } from '../../config/env';
import io from 'socket.io-client';
@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  socket: any;
  url = 'http://osedhelu.ml'
  constructor(private http: HttpClient) { 
    this.socket = io(this.url);
  }

  getServicios() {
    let url = `${env.url1}/seccion`;
    return this.http.get(url).pipe(
      map((resp: any) => resp.data),
      catchError(err => throwError(err)))
  }


   listen(EventName: string) {
      return new Observable((subscriber) => {
        this.socket.on(EventName, (data) => {
          subscriber.next(data);
        })
      })
  }
  emit(EventName:string, data: any) {
    this.socket.emit(EventName, data);
  }
}






















