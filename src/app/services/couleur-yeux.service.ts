import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Couleurs} from "../models/coaching.model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CouleurYeuxService {

  BaseURL = "http://localhost:8080/api/v1/couleur";
  constructor(private http : HttpClient) { }

  getCouleursYeux():Observable<Array<Couleurs>> {
    return this.http.get<Array<Couleurs>>(this.BaseURL + "s");
  }

  createCouleurs(data : Couleurs) : Observable<Couleurs>{
    return this.http.post<Couleurs>(this.BaseURL , data);
  }

  getOneCouleur(id : any) : Observable<Couleurs>{
    return this.http.get<Couleurs>(this.BaseURL + "/" + id)
  }

  deleteCouleur(id : any) {
    return this.http.delete(this.BaseURL + "/" + id)
  }


}
