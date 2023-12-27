import {Component, OnInit} from '@angular/core';
import {AbonnementService} from "../../../services/abonnement.service";
import {ActivatedRoute} from "@angular/router";
import {ClientDTO, ExerciceDTO} from "../../../models/coaching.model";

@Component({
  selector: 'app-single-abonnement',
  templateUrl: './single-abonnement.component.html',
  styleUrls: ['./single-abonnement.component.css']
})
export class SingleAbonnementComponent implements OnInit{

  abonnementID! : number;

  numeroAbonnement!: String;
  numeroPaiement!: String;
  dateAbonnement!: Date;
  datePaiement!: Date;
  dateFinAbonnement!: Date;
  typeAbonnement!: String;
  modePaiement!: String;
  montantPaie!: number;
  dureeAbonnement!: String;
  clientDTO!: ClientDTO;
  exerciceDTO!: ExerciceDTO;

  Path = {
    logo: "assets/img/user.jpeg"
  }

  constructor(private abonnementService : AbonnementService,
              private activeRoute : ActivatedRoute
  ) {
    this.abonnementID = this.activeRoute.snapshot.params["id"];
  }

  ngOnInit(): void {

    this.Path;

    this.abonnementService.getAbonnement(this.abonnementID).subscribe({
      next:(data) => {
        this.dateAbonnement = data.dateAbonnement;
        this.dureeAbonnement = data.dureeAbonnement;
        this.dateFinAbonnement = data.dateFinAbonnement;
        this.modePaiement = data.modePaiement;
        this.datePaiement = data.datePaiement;
        this.typeAbonnement = data.typeAbonnement;
        this.numeroAbonnement = data.numeroAbonnement;
        this.numeroAbonnement = data.numeroPaiement;
        this.montantPaie = data.montantPaie;
        this.numeroPaiement = data.numeroPaiement;
        this.clientDTO = data.clientDTO;
        this.exerciceDTO = data.exerciceDTO;
      },
      error:(err)=> {
        console.log(err.message())
    }
    })
  }





}
