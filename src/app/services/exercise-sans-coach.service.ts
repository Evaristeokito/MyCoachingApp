import { Injectable } from '@angular/core';
import { ExerciceSansCoach } from '../models/coaching.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseSansCoachService {

  BaseURL = "http://localhost:8080/api/v1/exercicesanscoach";

  constructor(private httpClient : HttpClient) { }

  getExercices(): Observable<Array<ExerciceSansCoach>> {
   return this.httpClient.get<Array<ExerciceSansCoach>>(this.BaseURL );
 }

 getExercice(id : Number) : Observable<ExerciceSansCoach> {
  return this.httpClient.get<ExerciceSansCoach>(this.BaseURL + "/" + id);
 }

 createExercice(data : ExerciceSansCoach):Observable<ExerciceSansCoach> {
  return this.httpClient.post<ExerciceSansCoach>(this.BaseURL , data);
 }

 deleteExerciceSansCoach(id : Number) {
  return this.httpClient.delete(this.BaseURL + "/" + id);
 }

 updateExerciceSansCoach(id:Number , data : ExerciceSansCoach):Observable<ExerciceSansCoach> {
  return this.httpClient.put<ExerciceSansCoach>(this.BaseURL + "/" + id , data);
 }


}
