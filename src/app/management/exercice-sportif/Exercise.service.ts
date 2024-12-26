import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import {environment} from "../../../environments/environment.development";
import {IExercice} from "../../shared/models/iexercice";


@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  baseUrl = environment.apiUrl;

  constructor(private http : HttpClient) { }

   getExercices(): Observable<Array<IExercice>> {
     return this.http.get<Array<IExercice>>(this.baseUrl + "exercices");
   }

   createExerciceSportif(data : IExercice)  {
     return this.http.post(this.baseUrl + "exercices",data);
   }

   getExercice(id:String):Observable<IExercice> {
     return this.http.get<IExercice>(this.baseUrl + "exercices" + id);
   }

   updateExercice(id : String , exercice : IExercice) {
    return this.http.put<IExercice>(this.baseUrl + "exercices/" + id ,exercice)
   }

  deleteExercice(id:String){
    return this.http.delete(this.baseUrl + "exercices" + id);
  }

}
