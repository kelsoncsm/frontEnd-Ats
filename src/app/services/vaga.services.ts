import { VagaModel } from 'src/app/model/vagaModel';
import { environment } from './../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  baseUrl = environment.url;
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  getListaVagas(): Observable<VagaModel[]> {
    return this.http.get<VagaModel[]>(`${this.baseUrl}/Vaga`);
  }

  readById(id: string | null): Observable<VagaModel> {
    const url = `${this.baseUrl}/Vaga/${id}`;
    return this.http.get<VagaModel>(url);
  }

  update(model: VagaModel): Observable<VagaModel> {
    return this.http.put<VagaModel>(
      `${this.baseUrl}/Vaga`,
      model,
      this.httpOptions
    );
  }

  save(model: VagaModel): Observable<VagaModel> {
    return this.http.post<VagaModel>(
      `${this.baseUrl}/Vaga`,
      model,
      this.httpOptions
    );
  }

  delete(model: any): Observable<VagaModel> {
    return this.http.post<VagaModel>(`${this.baseUrl}/Vaga/Delete`, model);
  }

  getVagasNaoAssociadas(id: string | null): Observable<VagaModel[]> {
    const url = `${this.baseUrl}/Vaga/GetVagasNaoAssociadas/${id}`;
    return this.http.get<VagaModel[]>(url);
  }
}
