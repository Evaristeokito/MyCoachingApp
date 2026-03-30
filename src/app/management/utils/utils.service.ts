import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { ICompetences, IExperience, IFormation, ILangues } from 'src/app/shared/models/agents';
import { ICommune } from 'src/app/shared/models/commune';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  BaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ========================== FORMATION ==============================

  getFormations(): Observable<Array<IFormation>> {
    return this.http.get<Array<IFormation>>(this.BaseUrl + 'formations');
  }

  getFormation(id: string): Observable<IFormation> {
    return this.http.get<IFormation>(this.BaseUrl + 'formations/' + id);
  }

  createFormation(data: IFormation): Observable<IFormation> {
    return this.http.post<IFormation>(this.BaseUrl + 'formations', data);
  }

  updateFormation(id: string, data: IFormation): Observable<IFormation> {
    return this.http.put<IFormation>(this.BaseUrl + 'formations/' + id, data);
  }

  deleteFormation(id: string) {
    return this.http.delete(this.BaseUrl + 'formations/' + id);
  }

  // ========================== EXPERIENCE PRO ==============================

  getExperiences(): Observable<Array<IExperience>> {
    return this.http.get<Array<IExperience>>(this.BaseUrl + 'experience');
  }

  getExperience(id: string): Observable<IExperience> {
    return this.http.get<IExperience>(this.BaseUrl + 'experience/' + id);
  }

  createExperience(data: IExperience): Observable<IExperience> {
    return this.http.post<IExperience>(this.BaseUrl + 'experience', data);
  }

  updateExperience(id: string, data: IExperience): Observable<IExperience> {
    return this.http.put<IExperience>(this.BaseUrl + 'experience/' + id, data);
  }

  deleteExperience(id: string) {
    return this.http.delete(this.BaseUrl + 'experience/' + id);
  }

  // ========================== Langues ==============================

  getLangues(): Observable<Array<ILangues>> {
    return this.http.get<Array<ILangues>>(this.BaseUrl + 'langues');
  }

  getLangue(id: any): Observable<ILangues> {
    return this.http.get<ILangues>(this.BaseUrl + 'langues/' + id);
  }

  createLangue(data: ILangues): Observable<ILangues> {
    return this.http.post<ILangues>(this.BaseUrl + 'langues', data);
  }

  updateLangue(id: any, data: ILangues): Observable<ILangues> {
    return this.http.put<ILangues>(this.BaseUrl + 'langues/' + id, data);
  }

  deleteLangue(id: any) {
    return this.http.delete<ILangues>(this.BaseUrl + 'langues/' + id);
  }

  // ========================== Commune ==============================

  getCommunes(): Observable<Array<ICommune>> {
    return this.http.get<Array<ICommune>>(this.BaseUrl + 'communes');
  }

  createICommune(data: ICommune) {
    return this.http.post(this.BaseUrl + 'communes', data);
  }

  getOneICommune(id: number): Observable<ICommune> {
    return this.http.get<ICommune>(this.BaseUrl + 'communes/' + id);
  }

  deleteICommune(id: number) {
    return this.http.delete(this.BaseUrl + 'communes/' + id);
  }

  updateICommune(id: number, data: ICommune): Observable<ICommune> {
    return this.http.put<ICommune>(this.BaseUrl + 'communes/' + id, data);
  }

 

  // ========================== competences ==============================

  getCompetences(): Observable<Array<ICompetences>> {
    return this.http.get<Array<ICompetences>>(this.BaseUrl + 'competences');
  }

  createCompetences(data: ICompetences): Observable<ICompetences> {
    return this.http.post<ICompetences>(this.BaseUrl + 'competences', data);
  }

  updateCompetence(id: string, data: ICompetences): Observable<ICompetences> {
    return this.http.put<ICompetences>(
      this.BaseUrl + 'competences/' + id,
      data,
    );
  }

  getCompetence(id: any): Observable<ICompetences> {
    return this.http.get<ICompetences>(this.BaseUrl + 'competences/' + id);
  }

  deleteCompetence(id: any) {
    return this.http.delete(this.BaseUrl + 'competences/' + id);
  }

}
