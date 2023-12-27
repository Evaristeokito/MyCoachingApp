import { Component, OnInit } from '@angular/core';
import {AbonnementDTO} from 'src/app/models/coaching.model';
import { AbonnementService } from 'src/app/services/abonnement.service';
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.css'],
})
export class AbonnementComponent implements OnInit {
  constructor(private serviceAbonnement: AbonnementService,private route:Router) {}

   abonnementDATA! : Observable<Array<AbonnementDTO>>;
   errorMessage! :String ;

  dtoptions: DataTables.Settings = {};


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

  onGetAbonnement(id:Number){
    this.route.navigateByUrl("/abonnement/abonnes-detail/" + id)
  }
}
