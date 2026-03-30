import { Component, OnInit } from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import { IAgent } from 'src/app/shared/models/agents';
import { AgentService } from '../agents.service';


@Component({
  selector: 'app-coach-table',
  templateUrl: './agents-table.component.html',
  styleUrls: ['./agents-table.component.css']
})
export class AgentsTableComponent implements OnInit {

  agentTable : Observable<Array<IAgent>> |undefined ;
  errorMessage! : String ;


  constructor(
    private service : AgentService,
    private route : Router,
  ){}

  ngOnInit(): void {

    this.onGetCoach();
  }

  onGetCoach(){
    this.agentTable = this.service.getAgents().pipe(
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
