import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Nationalite} from "../models/coaching.model";

@Injectable({
  providedIn: 'root'
})
export class NationaliteService {

  BACKENDURL = "http://localhost:8080/api/v1/nationalite";
  constructor(private http : HttpClient) { }

  getNationalites() : Observable<Array<Nationalite>>{
     return this.http.get<Array<Nationalite>>(this.BACKENDURL + "s");
  }

  getOneNationalite(id : any) : Observable<Nationalite> {
    return this.http.get<Nationalite>(this.BACKENDURL + "/" + id);
  }

  createNationalite(data : Nationalite):Observable<Nationalite> {
   return  this.http.post<Nationalite>(this.BACKENDURL , data);
  }

  deleteNationalite(id : any) {
    return this.http.delete(this.BACKENDURL + "/" + id );
  }


}
