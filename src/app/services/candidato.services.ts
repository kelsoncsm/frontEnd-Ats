import { environment } from './../../environments/environment';

import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { CandidatoModel } from '../model/candidatoModel';

@Injectable({
  providedIn: "root",
})
export class CandidatoService {


  baseUrl = environment.url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getListaCandidato(): Observable<CandidatoModel[]> {
    return this.http.get<CandidatoModel[]>(`${this.baseUrl}/Candidato`);
  }


  readById(id: string | null): Observable<CandidatoModel> {
    const url = `${this.baseUrl}/Candidato/${id}`;
    return this.http.get<CandidatoModel>(url);
  }

  update(model: CandidatoModel): Observable<CandidatoModel> {

    return this.http.put<CandidatoModel>(`${this.baseUrl}/Candidato`, model,this.httpOptions);

  }

  save(model: CandidatoModel): Observable<CandidatoModel> {

    return this.http.post<CandidatoModel>(`${this.baseUrl}/Candidato`, model,this.httpOptions);

  }


  delete(model: any): Observable<CandidatoModel> {

    return this.http.post<CandidatoModel>(`${this.baseUrl}/Candidato/Delete`, model);
  }
  // remove(model: CandidatoModel): Observable<CandidatoModel> {



  //   return this.http.delete<CandidatoModel>(`${this.baseUrl}/Candidato`, model,this.httpOptions);

  // }



}
