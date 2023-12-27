import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, catchError, pipe, throwError } from 'rxjs';
import { ClientDTO, ExerciceDTO } from 'src/app/models/coaching.model';
import { ClientsService } from 'src/app/services/Clients.service';
import { ExerciseService } from 'src/app/services/Exercise.service';

@Component({
  selector: 'app-add-abonnement',
  templateUrl: './add-abonnement.component.html',
  styleUrls: ['./add-abonnement.component.css']
})
export class AddAbonnementComponent implements OnInit  {
onSaveAbonnement() {
throw new Error('Method not implemented.');
}
onGetOneExercice(arg0: Number) {
throw new Error('Method not implemented.');
}
onGetOneClient(arg0: Number) {
throw new Error('Method not implemented.');
}

  exerciceData!: Observable<Array<ExerciceDTO>>
  clientData! : Observable<Array<ClientDTO>>
  abonneForm : FormGroup | any ;

  errorMessage : String = "";

  constructor(
    private clientService : ClientsService,
    private exerciceService : ExerciseService,
    private fb : FormBuilder
    ){}


  ngOnInit(): void {
    this.Path;
  
    this.getClients();
    this.getExercices();
  }

  Path = {
    logo: "assets/img/logo.png",
    user : "assets/img/user.jpeg"
  }

  getExercices(){
   this.exerciceData = this.exerciceService.getExercices().pipe(
    catchError(err => {
      this.errorMessage = err.message();
      return throwError (err);
    })
   )
  }
  
  getClients(){
    this.clientData = this.clientService.getClients().pipe(
     catchError(err => {
       this.errorMessage = err.message();
       return throwError (err);
     })
    )
   }

  

}
