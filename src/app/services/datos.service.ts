import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  pathService = 'http://localhost:56108/api';

  constructor(private http: HttpClient) { }

  protected generateBasicHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }

  getFacturas(): any {
    return this.http.get( this.pathService + `/Facturas`, { headers: this.generateBasicHeaders() });
  }

}
