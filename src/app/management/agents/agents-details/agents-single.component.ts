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

  agent_id: String | any;
  nom !: String;
  matricule!:String;
  postnom!: String;
  prenom! : String;
  sex !: String;
  public danais!: Date | any;
  lieuNaissance!: String;
  phoneNumber!: String;
  phoneNumber1 !: String;
  email!: String;
  photo!: null;
  address!: String;
  fonction!: any;
  civilite!: any;
  nationalite: any;
  filiation : any;
  service : any;

  public age: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private serviceCaoch: AgentService
  ) {
    this.agent_id = this.activeRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Path;

    this.serviceCaoch.getAgent(this.agent_id).subscribe({
      next: (data) => {
        this.matricule = data.matricule;
        this.nom = data.name ;
        this.postnom = data.lastname;
        this.prenom= data.firstname;
        this.sex = data.sex;
        this.danais = data.birthdate;
        this.lieuNaissance = data.placeBirth;
        this.phoneNumber = data.phoneNumber;
        this.phoneNumber1 = data.phoneNumber1;
        this.email = data.email;
        this.address = data.nationality
        this.nationalite = data.nationality;
        this.civilite = data.etatCivil;
        this.fonction = data.fonction;
        this.filiation = data.filiation;
        this.service = data.service
        
      },
      error: (error) => {},
    });

    let timeDiff = Math.abs(Date.now() - this.danais.getTime());
    this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
    console.log(this.age);
  }
}
