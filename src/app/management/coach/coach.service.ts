import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { ICoach } from 'src/app/shared/models/coach';
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root',
})
export class CoachService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  headerOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'Application/json' }),
  };

  /**
   * Get All products
   */
  getCoachs(): Observable<Array<ICoach>> {
    return this.http.get<Array<ICoach>>(this.baseUrl + 'coach');
  }

  getCoach(idCoach: String): Observable<ICoach> {
    return this.http.get<ICoach>(this.baseUrl + 'coach/' + idCoach);
  }

  createCoach(data: ICoach) {
    return this.http.post(this.baseUrl + 'coach', data);
  }

  updateCoach(id :String , coach : ICoach) {
    return this.http.put(this.baseUrl + "coach/" + id , coach);
  }

  deleteCoach(id: any) {
    return this.http.delete(this.baseUrl + 'coach/' + id);
  }

}
