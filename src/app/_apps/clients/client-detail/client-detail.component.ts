import { Component } from '@angular/core';
import {Civilite, Commune, Couleurs, CreneaucoachDTO, Nationalite, Poids, Taille} from "../../../models/coaching.model";
import {ActivatedRoute} from "@angular/router";
import {CoachService} from "../../../services/coach.service";
import {ClientsService} from "../../../services/Clients.service";

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent {

  Path = {
    user : "assets/img/user.jpeg"
  }

  client_id: Number | any;
  nom_client!: String;
  sexe!: String;
  telephone!: String ;
  telephone1!: String;
  email!: String;
  photo!: null;
  avenue!: String;
  numero!: String;
  quartier!: String;

  creneau! : CreneaucoachDTO;
  commune! : Commune;
  poids! : Poids;
  nationalite!: Nationalite;
  taille! : Taille;
  couleurYeux! : Couleurs;
  constructor(private activeRouter : ActivatedRoute,private clientService :ClientsService) {
    this.client_id = this.activeRouter.snapshot.params["id"];
  }

  ngOnInit(): void {
    this.Path;
    console.log(this.client_id);
    this.getDetailClients()
  }

  getDetailClients(){
    this.clientService.getOneClient(this.client_id).subscribe({
      next : (data) => {
        this.nom_client = data.nom_client;
        this.sexe = data.sexe;
        this.telephone = data.telephone;
        this.telephone1 = data.telephone1;
        this.email = data.email;
        this.numero = data.numero;
        this.avenue = data.avenue;
        this.quartier = data.quartier;
        this.creneau = data.creneauDTO;
        this.nationalite = data.nationaliteDTO;
        this.taille =data.tailleDTO;
        this.poids = data.poidsDTO;
        this.couleurYeux = data.couleurYeuxDTO
        this.commune = data.communeDTO;

      },
      error : (error) => {

      }
    })
  }

}
