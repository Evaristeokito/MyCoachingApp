import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AbonnementSansCoachDTO} from '../models/coaching.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbonnementSansCoachService {

  private baseUrl = "http://localhost:8080/api/v1/abonnementsanscoach";

  constructor(private http : HttpClient) { }

     /**
   * Get All abonnements
   */
     getAbonnements(): Observable<AbonnementSansCoachDTO> {
      return this.http.get<AbonnementSansCoachDTO>(this.baseUrl).pipe(
        map((data: AbonnementSansCoachDTO) => data || []),
        catchError(this.errorTraitement)
      );
    }

    getAbonnement(id : Number):Observable<AbonnementSansCoachDTO> {
      return this.http.get<AbonnementSansCoachDTO>(this.baseUrl + "/" + id);
    }

    createAbonnement(data : AbonnementSansCoachDTO):Observable<AbonnementSansCoachDTO> {
      return this.http.post<AbonnementSansCoachDTO>(this.baseUrl , data);
    }

    deleteAbonnement(id:Number) {
      return this.http.delete(this.baseUrl + "/" + id);
    }

       // traitement des erreurs
   errorTraitement(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }


}
