import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {ICoach} from "../../shared/models/coach";
import {CoachService} from "../coach/coach.service";

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css'],
})
export class AbonnementComponent implements OnInit {

  coachTable : Observable<Array<ICoach>> |undefined ;
  errorMessage! : String ;

  constructor(
    private service : CoachService,
    private route : Router,
  ){}

  ngOnInit(): void {

    this.onGetCoach();
  }

  onGetCoach(){
    this.coachTable = this.service.getCoachs().pipe(
      catchError((err) => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    );
  }

  singleCoach(id: string) {
    this.route.navigateByUrl("/coach/single/" + id);
  }

  editCoach(id: string) {
    this.route.navigateByUrl("/coach/update/" + id);
  }
}
