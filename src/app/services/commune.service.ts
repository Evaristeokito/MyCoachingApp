import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Commune} from "../models/coaching.model";

@Injectable({
  providedIn: 'root'
})
export class CommuneService {

  BaseURL = "http://localhost:8080/api/v1/commune";

  constructor(private http : HttpClient) { }

  getCommunes():Observable<Array<Commune>> {
    return this.http.get<Array<Commune>>(this.BaseURL + "s");
  }

  createCommune(data : Commune) {
    return this.http.post(this.BaseURL ,data);
  }

  getOneCommune(id:number) : Observable<Commune>{
    return this.http.get<Commune>(this.BaseURL + "/" + id)
  }

  deleteCommune(id : number){
    return this.http.delete(this.BaseURL + "/" + id);
  }

  updateCommune(id:number,data : Commune) :Observable<Commune>{
    return this.http.put<Commune>(this.BaseURL + "/" + id,data);
  }

}
