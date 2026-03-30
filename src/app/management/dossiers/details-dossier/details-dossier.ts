import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DossierService } from '../DossierService';
import { MatCardContent, MatCard } from '@angular/material/card';
import { DatePipe, NgIf, NgForOf, NgFor } from '@angular/common';
import { Dossiers } from '../dossiers';
import { ICompetences } from 'src/app/shared/models/agents';

@Component({
  selector: 'app-details-dossier',
  standalone: true,
  imports: [MatCardContent, MatCard, DatePipe, NgIf, NgFor],
  templateUrl: './details-dossier.html',
  styleUrl: './details-dossier.css',
})
export class DetailsDossier implements OnInit {

  dossierAgent : Dossiers | any;

  dossier_id: String | any;
  nom!: String;
  matricule!: String;
  postnom!: String;
  prenom!: String;
  sex!: String;
  phoneNumber!: String;
  phoneNumber1!: String;
  email!: String;
  photo!: null;
  nationality!: String;
  fonction!: any;
  civilite!: any;
  nationalite: any;
  filiation: any;
  service: any;
  lieuNaissance: any;
  numeroDossier: any;
  dateNaissance: any;

  public age: any;
  constructor(
    private activeRouter: ActivatedRoute,
    private dossierService: DossierService,
  ) {
    this.dossier_id = this.activeRouter.snapshot.params['id'];
  }


  ngOnInit(): void {
    this.dossierService.getDossier(this.dossier_id).subscribe({
      next: (data) => {
        this.numeroDossier = data.numeroDossier;
        this.matricule = data.agent.matricule;
        this.nom = data.agent.name;
        this.postnom = data.agent.lastname;
        this.prenom = data.agent.firstname;
        this.sex = data.agent.sex;
        this.dateNaissance = data.agent.birthdate;
        this.lieuNaissance = data.agent.placeBirth;
        this.phoneNumber = data.agent.phoneNumber;
        this.phoneNumber1 = data.agent.phoneNumber1;
        this.email = data.agent.email;
        this.nationality = data.agent.nationality;
        this.civilite = data.agent.etatCivil;
        this.fonction = data.agent.fonction;
        this.filiation = data.agent.filiation;
        this.service = data.agent.service;
        this.dossierAgent = data;
      },
      error: (error) => {},
    });
  }
}
