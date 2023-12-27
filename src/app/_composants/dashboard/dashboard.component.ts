import { Component, OnInit } from '@angular/core';
import { AbonnementService } from 'src/app/services/abonnement.service';
import {catchError, Observable, throwError} from "rxjs";
import {AbonnementDTO} from "../../models/coaching.model";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  abonnementDATA! : Observable<Array<AbonnementDTO>>;
  errorMessage! :String ;

  constructor(private serviceAbonnement: AbonnementService){}

  ngOnInit(): void {

    this.onLoadAbonnement();
  }

  onLoadAbonnement() {
    this.abonnementDATA =this.serviceAbonnement.getAbonnements().pipe(
      catchError(err => {
        this.errorMessage = err.message();
        return throwError (err);
      })
    )
  }

}
