import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment.development";
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {ICivilite} from "../../../shared/models/global.model";

@Injectable({
  providedIn: 'root'
})

export class CiviliteService {

  BaseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getCivilities(): Observable<Array<ICivilite>> {
    return this.http.get<Array<ICivilite>>(this.BaseUrl + 'civilites');
  }

  getCivility(id: any): Observable<ICivilite> {
    return this.http.get<ICivilite>(this.BaseUrl + 'civilites/' + id);
  }

  createCivility(data: ICivilite) {
    return this.http.post(this.BaseUrl + 'civilites', data);
  }

  updateICivility(data: ICivilite, id: any): Observable<Array<ICivilite>> {
    return this.http.put<Array<ICivilite>>(this.BaseUrl + 'civilites/' + id, data);
  }

  deleteCivility(id: any) {
    return this.http.delete(this.BaseUrl + 'civilites/' + id);
  }
}
