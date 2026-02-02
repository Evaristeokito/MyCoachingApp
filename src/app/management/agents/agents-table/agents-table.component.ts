import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import { ICoach } from 'src/app/shared/models/coach';
import { AgentService } from '../agents.service';


@Component({
  selector: 'app-coach-table',
  templateUrl: './agents-table.component.html',
  styleUrls: ['./agents-table.component.css']
})
export class AgentsTableComponent implements OnInit {

  coachTable : Observable<Array<ICoach>> |undefined ;
  errorMessage! : String ;


  constructor(
    private service : AgentService,
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
