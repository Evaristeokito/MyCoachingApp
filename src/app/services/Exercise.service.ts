import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {ExerciceDTO} from '../models/coaching.model';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  private baseUrl = "http://localhost:8080/api/v1/exercice";

  constructor(private http : HttpClient) { }

  getExercices(): Observable<Array<ExerciceDTO>> {
    return this.http.get<Array<ExerciceDTO>>(this.baseUrl + "s");
  }

  createExerciceSportif(data : ExerciceDTO)  {
    return this.http.post(this.baseUrl,data);
  }

  getExercice(id:Number):Observable<ExerciceDTO>{
    return this.http.get<ExerciceDTO>(this.baseUrl + "/" + id);
  }

  deleteExercice(id:Number){
    return this.http.delete(this.baseUrl + "/" + id);
  }


}
