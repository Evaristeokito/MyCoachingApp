import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ExerciseSansCoachService {
  BaseURL = 'http://localhost:8080/api/v1/exercicesanscoach';

  constructor(private httpClient: HttpClient) {}

  getExercices(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.BaseURL);
  }

  getExercice(id: Number): Observable<any> {
    return this.httpClient.get<any>(this.BaseURL + '/' + id);
  }

  createExercice(data: any): Observable<any> {
    return this.httpClient.post<any>(this.BaseURL, data);
  }

  deleteExerciceSansCoach(id: Number) {
    return this.httpClient.delete(this.BaseURL + '/' + id);
  }

  updateExerciceSansCoach(
    id: Number,
    data: any
  ): Observable<any> {
    return this.httpClient.put<any>(
      this.BaseURL + '/' + id,
      data
    );
  }
}
