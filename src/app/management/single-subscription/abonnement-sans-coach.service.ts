import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AbonnementSansCoachService {
  private baseUrl = 'http://localhost:8080/api/v1/abonnementsanscoach';

  constructor(private http: HttpClient) {}

  /**
   * Get All abonnements
   */
  getAbonnements(): Observable<any> {
    return this.http.get<any>(this.baseUrl).pipe(
      map((data: any) => data || []),
      catchError(this.errorTraitement)
    );
  }

  getAbonnement(id: Number): Observable<any> {
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  createAbonnement(
    data: any
  ): Observable<any> {
    return this.http.post<any>(this.baseUrl, data);
  }

  deleteAbonnement(id: Number) {
    return this.http.delete(this.baseUrl + '/' + id);
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
