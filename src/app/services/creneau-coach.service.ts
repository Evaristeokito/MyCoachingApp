import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { CreneaucoachDTO} from '../models/coaching.model';

@Injectable({
  providedIn: 'root'
})
export class CreneauCoachService {

  private baseUrl = "http://localhost:8080/api/v1/creneau";

  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

  constructor(private http : HttpClient) { }

  getCreneauCoach(): Observable<Array<CreneaucoachDTO>> {
    return this.http.get<Array<CreneaucoachDTO>>(this.baseUrl);
  }

  createCoachCreneau(data : CreneaucoachDTO) {
    return this.http.post(this.baseUrl ,data,this.headerOptions).pipe(catchError(this.errorTraitement))
  }

  getOneCreneau(id : any):Observable<CreneaucoachDTO> {
    return this.http.get<CreneaucoachDTO>(this.baseUrl + "/" + id);
  }

  deleteCreneau(id : any){
   return this.http.delete(this.baseUrl + "/" +  id);
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
