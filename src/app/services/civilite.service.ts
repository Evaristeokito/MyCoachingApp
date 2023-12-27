import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Civilite} from "../models/coaching.model";

@Injectable({
  providedIn: 'root'
})
export class CiviliteService {

  BackendURL = "http://localhost:8080/api/v1/civilite"

  constructor(private http : HttpClient) { }

  getCivilites() : Observable<Array<Civilite>> {
    return this.http.get<Array<Civilite>>(this.BackendURL + "s");
  }

  getOneCivilite(id : any) : Observable<Civilite>{
    return this.http.get<Civilite>(this.BackendURL + "/" + id);
  }

  createCivilite(data : Civilite) {
    return this.http.post(this.BackendURL , data);
  }

  updateCivilite(data : Civilite , id : any) : Observable<Array<Civilite>>{
    return this.http.put<Array<Civilite>>(this.BackendURL + "/" + id , data);
  }

  deleteCivilite(id:any) {
    return this.http.delete(this.BackendURL + "/" + id)
  }
}
