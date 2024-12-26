import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommune } from 'src/app/shared/models/commune';
import { ICreneau } from 'src/app/shared/models/creneau';
import {
  ICivilite,
  IPoids,
  INationalite,
  ITaille,
  IColors,
} from 'src/app/shared/models/global.model';
import { CoachService } from '../coach.service';

@Component({
  selector: 'app-coach-single',
  templateUrl: './coach-single.component.html',
  styleUrls: ['./coach-single.component.css'],
})
export class CoachSingleComponent implements OnInit {
  Path = {
    user: 'assets/img/user.jpeg',
  };

  coach_id: String | any;
  nom_coach!: String;
  lastname!: String;
  firstname! : String;
  sexe!: String;
  public danais!: Date | any;
  lieu_naissance!: String;
  experience_pro!: String;
  telephone!: String;
  telephone1!: String;
  email!: String;
  photo!: null;
  address!: String;
  creneau!: any;
  commune!: ICommune;
  civilite!: any;
  poids!: any;
  nationalite: any;
  taille!: any;
  couleurYeux!: any;
  unit : any;
  country : any;

  public age: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private serviceCaoch: CoachService
  ) {
    this.coach_id = this.activeRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Path;

    this.serviceCaoch.getCoach(this.coach_id).subscribe({
      next: (data) => {
        this.nom_coach = data.name ;
        this.lastname = data.lastname;
        this.firstname = data.firstname;
        this.sexe = data.sex;
        this.danais = data.dateOfBirt;
        this.lieu_naissance = data.placeOfBirt;
        this.telephone = data.phoneNumber;
        this.telephone1 = data.phoneNumber1;
        this.email = data.email;
        this.experience_pro = data.professionalExp;
        this.address = data.addressLine
        this.nationalite = data.nationalite.name;
        this.taille = data.taille.taille;
        this.civilite = data.civilite.name;
        this.couleurYeux = data.couleurYeux.name;
        this.creneau = data.creneau;
        this.unit = data.taille.unite;
        this.country = data.nationalite.country
      },
      error: (error) => {},
    });

    let timeDiff = Math.abs(Date.now() - this.danais.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    console.log(this.age);
  }
}
