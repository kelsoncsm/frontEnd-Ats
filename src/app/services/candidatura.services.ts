import { CandidaturaModel } from './../model/candidaturaModel';
import { environment } from '../../environments/environment';
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CandidadaturaService {


  baseUrl = environment.url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private http: HttpClient) { }

  getLista(): Observable<CandidaturaModel[]> {
    return this.http.get<CandidaturaModel[]>(`${this.baseUrl}/Candidatura`);
  }


  readById(id: string | null): Observable<CandidaturaModel> {
    const url = `${this.baseUrl}/Candidatura/${id}`;
    return this.http.get<CandidaturaModel>(url);
  }



}
