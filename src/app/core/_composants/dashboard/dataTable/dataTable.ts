import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { AgentService } from 'src/app/management/agents/agents.service';
import { IAgent } from 'src/app/shared/models/agents';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './dataTable.html',
  styleUrl: './dataTable.css'
})
export class DataTable implements OnInit { 

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
