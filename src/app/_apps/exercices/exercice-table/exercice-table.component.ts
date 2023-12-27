import { Component, OnInit } from '@angular/core';
import { DataTableLanguage } from 'src/app/languages/dataTablesLang';
import { ExerciceDTO } from 'src/app/models/coaching.model';
import { ExerciseService } from 'src/app/services/Exercise.service';
import {catchError, Observable, throwError} from "rxjs";
import { Router } from '@angular/router';


@Component({
  selector: 'app-exercice-tables',
  templateUrl: './exercice-table.component.html',
  styleUrls: ['./exercice-table.component.css'],
})
export class ExerciceTableComponent implements OnInit {

  dtoptions: DataTables.Settings = {};
  exerciceData!: Observable<Array<ExerciceDTO>>
  errorMessage! : String ;

  constructor(private exerciceService: ExerciseService,private route : Router){
  }


  ngOnInit(): void {

   this.onLoad();

  }

  onLoad() {
   this.exerciceData = this.exerciceService.getExercices().pipe(
     catchError(err => {
       this.errorMessage = err.message();
       return throwError(err);
     })
   )
  }

  onGetSingleExercice(exerciceID :Number){
   this.route.navigateByUrl("/exercise-sportif/single/" + exerciceID)
  }
}
