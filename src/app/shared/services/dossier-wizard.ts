import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Agentsss, 
  CompetenceAgent, 
  DossierAgent, 
  EtudeAgent, 
  ExperienceProfessionnelle, 
  FormationAgent, 
  LangueAgent } from '../models/agentsss';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root',
})


export class DossierWizardService {
  
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  createAgent(formData: FormData): Observable<Agentsss> {
    return this.http.post<Agentsss>(`${this.baseUrl}/agent`, formData);
  }

  createDossier(payload: DossierAgent): Observable<DossierAgent> {
    return this.http.post<DossierAgent>(`${this.baseUrl}/dossierAgent`, payload);
  }

  addLangues(
    dossierId: number,
    payload: LangueAgent[],
  ): Observable<LangueAgent[]> {
    return this.http.post<LangueAgent[]>(
      `${this.baseUrl}/dossiers/${dossierId}/langues`,
      payload,
    );
  }

  addEtudes(
    dossierId: number,
    payload: EtudeAgent[],
  ): Observable<EtudeAgent[]> {
    return this.http.post<EtudeAgent[]>(
      `${this.baseUrl}/dossiers/${dossierId}/formations`,
      payload,
    );
  }

  addCompetences(
    dossierId: number,
    payload: CompetenceAgent[],
  ): Observable<CompetenceAgent[]> {
    return this.http.post<CompetenceAgent[]>(
      `${this.baseUrl}/dossiers/${dossierId}/competences`,
      payload,
    );
  }

  addFormations(
    dossierId: number,
    payload: FormationAgent[],
  ): Observable<FormationAgent[]> {
    return this.http.post<FormationAgent[]>(
      `${this.baseUrl}/dossiers/${dossierId}/formations`,
      payload,
    );
  }

  addExperiences(
    dossierId: number,
    payload: ExperienceProfessionnelle[],
  ): Observable<ExperienceProfessionnelle[]> {
    return this.http.post<ExperienceProfessionnelle[]>(
      `${this.baseUrl}/dossiers/${dossierId}/experiences`,
      payload,
    );
  }

  validerDossier(dossierId: number): Observable<DossierAgent> {
    return this.http.put<DossierAgent>(
      `${this.baseUrl}/dossiers/${dossierId}/valider`,
      {},
    );
  }
}
