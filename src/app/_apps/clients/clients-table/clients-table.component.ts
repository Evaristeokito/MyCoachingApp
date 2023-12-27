import {Component, OnInit} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {ClientDTO} from "../../../models/coaching.model";
import {ClientsService} from "../../../services/Clients.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-clients-table',
  templateUrl: './clients-table.component.html',
  styleUrls: ['./clients-table.component.css']
})
export class ClientsTableComponent implements OnInit{

  clientDATA ! : Observable<Array<ClientDTO>>;
  errorMessage : String = "";
  constructor(private clientService : ClientsService,private route : Router) {

  }

  ngOnInit(): void {
    this.onGetClientData();
  }

  onGetClientData(){
    this.clientDATA = this.clientService.getClients().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return throwError(err);
      })
    )
  }

  onGetOneClient(id :any){

  }


  clientDetail(id: Number) {
    this.route.navigateByUrl("/client/client-detail/" + id);
  }
}
