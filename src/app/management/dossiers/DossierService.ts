import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDossiers } from 'src/app/shared/models/dossiers';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class DossierService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

  getAllDossiers() : Observable<IDossiers[]> {
      return this.http.get<IDossiers[]>(this.baseUrl + 'agentcv');
  }

  getDossier(dossierID : String) :Observable<IDossiers> {
    return this.http.get<IDossiers>(this.baseUrl + 'agentcv/' +  dossierID)
  }
}
