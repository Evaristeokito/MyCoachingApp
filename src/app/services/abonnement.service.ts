import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import {AbonnementDTO} from '../models/coaching.model';
import {AbonnementComponent} from "../_apps/abonnement/abonnement.component";

@Injectable({
  providedIn: 'root'
})
export class AbonnementService {

  private baseUrl = "http://localhost:8080/api/v1/abonnement";

  constructor(private http : HttpClient) { }

     /**
   * Get All abonnements
   */
     getAbonnements(): Observable<Array<AbonnementDTO>> {
      return this.http.get<Array<AbonnementDTO>>(this.baseUrl + "s");
    }

    getAbonnement(id :number) :Observable<AbonnementDTO> {
       return this.http.get<AbonnementDTO>(this.baseUrl + "/" + id);
    }

    createAbonnement(data : AbonnementComponent):Observable<AbonnementDTO>{
       return this.http.post<AbonnementDTO>(this.baseUrl,data)
    }

    deleteAbonnement(id:number){
       return this.http.delete(this.baseUrl + "/" + id)
    }


}
