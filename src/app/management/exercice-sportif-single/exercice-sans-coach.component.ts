import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercice-sans-coach',
  templateUrl: './exercice-sans-coach.component.html',
  styleUrls: ['./exercice-sans-coach.component.css']
})
export class ExerciceSansCoachComponent implements OnInit {


  // exerciseData! : Observable<Array<ExerciceSansCoach>>
  errorMessage : String = "";

  constructor(){}

  ngOnInit(): void {

    // this.exerciseData = this.exerciceSansCoachService.getExercices().pipe(
    //   catchError(err => {
    //     this.errorMessage = err.message();
    //     return throwError (err);
    //   })
    // )
  }

  onGetSport(arg0: Number) {
    throw new Error('Method not implemented.');
    }

}
