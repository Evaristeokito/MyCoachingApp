import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CoachService} from "../../../services/coach.service";
import {Civilite, Commune, Couleurs, CreneaucoachDTO, Nationalite, Poids, Taille} from "../../../models/coaching.model";

@Component({
  selector: 'app-coach-single',
  templateUrl: './coach-single.component.html',
  styleUrls: ['./coach-single.component.css']
})
export class CoachSingleComponent implements OnInit{

    Path = {
        user : "assets/img/user.jpeg"
    }

  coach_id: Number | any;
    nom_coach!: String;
    sexe!: String;
  public danais!: Date;
    lieu_naissance!: String;
    experience_pro!: String;
    telephone!: String ;
    telephone1!: String;
    email!: String;
    photo!: null;
    avenue!: String;
    numero!: String;
    quartier!: String;

    creneau! : CreneaucoachDTO;
    commune! : Commune;
    civilite! : Civilite;
    poids! : Poids;
    nationalite!: Nationalite;
    taille! : Taille;
    couleurYeux! : Couleurs;

   public age : any;
  constructor(private activeRouter : ActivatedRoute,private serviceCaoch :CoachService) {
     this.coach_id = this.activeRouter.snapshot.params["id"];
  }

    ngOnInit(): void {
    this.Path;

      this.serviceCaoch.getCoach(this.coach_id).subscribe({
        next : (data) => {
          this.nom_coach = data.nom_coach;
          this.sexe = data.sexe;
          this.danais = data.danais;
          this.lieu_naissance = data.lieu_naissance;
          this.telephone = data.telephone;
          this.telephone1 = data.telephone1;
          this.email = data.email;
          this.experience_pro = data.experience_pro;
          this.numero = data.numero;
          this.avenue = data.avenue;
          this.quartier = data.quartier;

          this.creneau = data.creneau;
          this.nationalite = data.nationalite;
          this.taille =data.taille;
          this.poids = data.poids;
          this.civilite = data.civilite;
          this.couleurYeux = data.couleurYeux;
          this.commune = data.commune;

        },
        error : (error) => {

        }
      });

      let timeDiff = Math.abs(Date.now() - this.danais.getTime());
       this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
      console.log(this.age);
    }

}
