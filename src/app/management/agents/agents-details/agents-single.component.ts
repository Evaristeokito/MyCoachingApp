import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICommune } from 'src/app/shared/models/commune';
import { AgentService } from '../agents.service';

@Component({
  selector: 'app-coach-single',
  templateUrl: './agents-single.component.html',
  styleUrls: ['./agents-single.component.css'],
})
export class AgentsSingleComponent implements OnInit {
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
    private serviceCaoch: AgentService
  ) {
    this.coach_id = this.activeRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Path;

    this.serviceCaoch.getAgent(this.coach_id).subscribe({
      next: (data) => {
        this.nom_coach = data.name ;
        this.lastname = data.lastname;
        this.firstname = data.firstname;
        this.sexe = data.sexe;
        this.danais = data.birthdate;
        this.lieu_naissance = data.placeBirth;
        this.telephone = data.phone;
        this.telephone1 = data.phone1;
        this.email = data.email;
        this.address = data.nationality
        this.nationalite = data.nationality;
      },
      error: (error) => {},
    });

    let timeDiff = Math.abs(Date.now() - this.danais.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    console.log(this.age);
  }
}
