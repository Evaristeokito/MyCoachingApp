import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {ICoach} from "../../../shared/models/coach";
import {CoachService} from "../../coach/coach.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.css'],
})
export class CustomerTableComponent implements OnInit {

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
