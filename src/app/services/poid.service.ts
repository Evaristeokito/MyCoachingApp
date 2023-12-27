import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Poids} from "../models/coaching.model";

@Injectable({
  providedIn: 'root'
})
export class PoidService {

  BaseUrl = "http://localhost:8080/api/v1/poid";
  constructor(private http : HttpClient) { }

  getPoids():Observable<Array<Poids>>{
    return this.http.get<Array<Poids>>(this.BaseUrl + "s");
  }

  getOnePoid(id:Number):Observable<Poids>{
    return this.http.get<Poids>(this.BaseUrl + "/" + id);
  }

  createPoid(data:Poids):Observable<Poids>{
    return this.http.post<Poids>(this.BaseUrl,data);
  }

  updatePoids(data:Poids,id : Number):Observable<Poids>{
    return this.http.put<Poids>(this.BaseUrl + "/" + id ,data);
  }

  deletePoids(id:Number){
    return this.http.delete<Poids>(this.BaseUrl + "/" + id);
  }
}
