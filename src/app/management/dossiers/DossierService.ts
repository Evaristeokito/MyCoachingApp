import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAgent } from 'src/app/shared/models/dossiers';
import { environment } from 'src/environments/environment.development';


export interface UpdateDossierRequest {
  numeroDossier: String;
  version: string;
  resume_Professionnel: string;
  etatCivil: string;
}

@Injectable({
  providedIn: 'root',
})
export class DossierService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

  getAllDossiers(): Observable<IAgent[]> {
    return this.http.get<IAgent[]>(this.baseUrl + 'dossierAgent');
  }

  getDossier(dossierID: String): Observable<IAgent> {
    return this.http.get<IAgent>(this.baseUrl + 'dossierAgent/' + dossierID);
  }

  getAgentDetail(id: string): Observable<IAgent> {
    return this.http.get<IAgent>(`${this.baseUrl} dossierAgent/${id}`);
  }

  createDossier(data: IAgent) {
    return this.http.post(this.baseUrl + 'dossierAgent', data);
  }

  updateDossier(id: String, payload: UpdateDossierRequest): Observable<IAgent> {
    return this.http.put<IAgent>(this.baseUrl + 'dossierAgent/' + id, payload);
  }
}
