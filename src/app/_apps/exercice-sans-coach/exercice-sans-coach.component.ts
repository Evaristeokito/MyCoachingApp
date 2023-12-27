import { Component, OnInit } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { ExerciceSansCoach } from 'src/app/models/coaching.model';
import { ExerciseSansCoachService } from 'src/app/services/exercise-sans-coach.service';

@Component({
  selector: 'app-exercice-sans-coach',
  templateUrl: './exercice-sans-coach.component.html',
  styleUrls: ['./exercice-sans-coach.component.css']
})
export class ExerciceSansCoachComponent implements OnInit {


  exerciseData! : Observable<Array<ExerciceSansCoach>>
  errorMessage : String = "";

  constructor(private exerciceSansCoachService : ExerciseSansCoachService){}

  ngOnInit(): void {
    
    this.exerciseData = this.exerciceSansCoachService.getExercices().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError (err);
      })
    )
  }

  onGetSport(arg0: Number) {
    throw new Error('Method not implemented.');
    }

}
