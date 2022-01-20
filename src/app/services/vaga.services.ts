import { environment } from './../../environments/environment';

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { VagaModel } from '../model/vagaModel';

@Injectable({
  providedIn: "root",
})
export class VagaService {


  baseUrl = environment.url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getListaVaga(): Observable<VagaModel[]> {
    return this.http.get<VagaModel[]>( this.baseUrl +'/Vaga');
  }

}
