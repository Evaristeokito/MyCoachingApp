import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { Coach } from '../models/coaching.model';

@Injectable({
  providedIn: 'root'
})
export class CoachService {

  private baseUrl = "http://localhost:8080/api/v1/coach";

  constructor(private http : HttpClient) { }

  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

   /**
   * Get All products
   */
   getCoachs(): Observable<Array<Coach>> {
    return this.http.get<Array<Coach>>(this.baseUrl + "s");
  }

  getCoach( idCoach:Number) : Observable<Coach> {
     return this.http.get<Coach>(this.baseUrl + "/" + idCoach );
  }

  createCoach(data : Coach){
     return this.http.post(this.baseUrl, data);
  }
  deleteCoach(id :any) {
     return this.http.delete(this.baseUrl + "/" + id);
  }

}
