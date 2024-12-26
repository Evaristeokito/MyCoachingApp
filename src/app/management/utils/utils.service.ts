import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ICommune } from 'src/app/shared/models/commune';
import { ICreneau } from 'src/app/shared/models/creneau';
import {
  IColors,
  INationalite,
  IPoids,
  ITaille,
} from 'src/app/shared/models/global.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {

  BaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // ========================== Taille ==============================

  getTailles(): Observable<Array<ITaille>> {
    return this.http.get<Array<ITaille>>(this.BaseUrl + 'tailles');
  }

  getTaille(id: Number): Observable<ITaille> {
    return this.http.get<ITaille>(this.BaseUrl + 'taillles/' + id);
  }

  createTaille(data: ITaille): Observable<ITaille> {
    return this.http.post<ITaille>(this.BaseUrl + 'tailles', data);
  }

  updateTaille(id: Number,data: ITaille): Observable<ITaille> {
    return this.http.put<ITaille>(this.BaseUrl + 'tailles/' + id, data);
  }

  deleteTaille(id: Number) {
    return this.http.delete(this.BaseUrl + 'tailles/' + id);
  }
  // ========================== Poids ==============================

  getPoids(): Observable<Array<IPoids>> {
    return this.http.get<Array<IPoids>>(this.BaseUrl + 'poids');
  }

  getOnePoid(id: Number): Observable<IPoids> {
    return this.http.get<IPoids>(this.BaseUrl + 'poids/' + id);
  }

  createPoid(data: IPoids): Observable<IPoids> {
    return this.http.post<IPoids>(this.BaseUrl + 'poids', data);
  }

  updatePoids(id: Number,data: IPoids): Observable<IPoids> {
    return this.http.put<IPoids>(this.BaseUrl + 'poids/' + id, data);
  }

  deletePoids(id: Number) {
    return this.http.delete<IPoids>(this.BaseUrl + 'poids/' + id);
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

  // ========================== Nationalite ==============================

  getNationalites(): Observable<Array<INationalite>> {
    return this.http.get<Array<INationalite>>(this.BaseUrl + 'nationalites');
  }

  getOneNationalite(id: any): Observable<INationalite> {
    return this.http.get<INationalite>(this.BaseUrl + 'nationalites/' + id);
  }

  createNationalite(data: INationalite): Observable<INationalite> {
    return this.http.post<INationalite>(this.BaseUrl, data);
  }

  deleteNationalite(id: any) {
    return this.http.delete(this.BaseUrl + '/' + id);
  }

  // ========================== colors ==============================

  getCouleursYeux(): Observable<Array<IColors>> {
    return this.http.get<Array<IColors>>(this.BaseUrl + 'couleurs');
  }

  createCouleurs(data: IColors): Observable<IColors> {
    return this.http.post<IColors>(this.BaseUrl + 'couleurs', data);
  }

  updateCouleurs(id: number, data: IColors): Observable<IColors> {
    return this.http.put<IColors>(this.BaseUrl + 'couleurs/' + id, data);
  }

  getOneCouleur(id: any): Observable<IColors> {
    return this.http.get<IColors>(this.BaseUrl + 'couleurs/' + id);
  }

  deleteCouleur(id: any) {
    return this.http.delete(this.BaseUrl + 'couleurs/' + id);
  }

  //============================= Creneau ============================

  getCreneaux(): Observable<Array<ICreneau>> {
    return this.http.get<Array<ICreneau>>(this.BaseUrl + 'creneau');
  }

  getCreneau(id: string): Observable<ICreneau> {
    return this.http.get<ICreneau>(this.BaseUrl + 'creneau/' + id);
  }

  createCreneau(data: ICreneau) {
    return this.http.post(this.BaseUrl + 'creneau', data);
  }

  updateCreneau(id : String , creneau : ICreneau) {
    return this.http.put(this.BaseUrl + 'creneau/' + id , creneau );
  }

  deleteCreneau(id: any) {
    return this.http.delete(this.BaseUrl + 'creneau/' + id);
  }


}
