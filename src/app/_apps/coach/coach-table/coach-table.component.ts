import { Component, OnInit } from '@angular/core';
import { DataTableLanguage } from 'src/app/languages/dataTablesLang';
import { Coach } from 'src/app/models/coaching.model';
import { CoachService } from 'src/app/services/coach.service';
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-coach-table',
  templateUrl: './coach-table.component.html',
  styleUrls: ['./coach-table.component.css']
})
export class CoachTableComponent implements OnInit {

  coachTable : Observable<Array<Coach>> |undefined ;
  errorMessage! : String ;

  constructor(
    private coachService : CoachService,
    private route : Router,
  ){}

  ngOnInit(): void {

    this.onGetCoach();
  }

  onGetCoach(){
    this.coachTable = this.coachService.getCoachs().pipe(
      catchError(err => {
        this.errorMessage = err.message
        return throwError(err);
      })
    )
  }

  singleCoach(id :Number) {
   this.route.navigateByUrl("/coach/single-coach/" + id);
  }

  editCoach(id: Number) {
    this.route.navigateByUrl("/coach/update-coach/" + id);
  }
}
