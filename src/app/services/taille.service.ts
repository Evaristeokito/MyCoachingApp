import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Tail} from "rxjs";
import {Taille} from "../models/coaching.model";

@Injectable({
  providedIn: 'root'
})
export class TailleService {

  BaseUrl = "http://localhost:8080/api/v1/taille";

  constructor(private http : HttpClient) { }

    getTailles():Observable<Array<Taille>>{
       return this.http.get<Array<Taille>>(this.BaseUrl + "s")
    }

    getOneTaille(id : Number) :Observable<Taille>{
     return this.http.get<Taille>(this.BaseUrl + "/" + id);
    }

    createTaille(data: Taille):Observable<Taille> {
    return this.http.post<Taille>(this.BaseUrl , data);
    }

    updateTaille(data:Taille,id :Number) :Observable<Taille>{
    return this.http.put<Taille>(this.BaseUrl + "/" + "id" , data);
    }

    deleteTaille(id :Number){
    return this.http.delete(this.BaseUrl + "/" + id);
    }
}
