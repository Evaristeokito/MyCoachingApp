import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  NgFor, NgIf } from '@angular/common';
import { IDossiers } from 'src/app/shared/models/dossiers';
import { DossierService } from './DossierService';

@Component({
  selector: 'app-dossiers',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './dossiers.html',
  styleUrl: './dossiers.css',
})
export class Dossiers implements OnInit {
  ngOnInit(): void {
    this.onGetDossiers();
  }

  dossierTable: IDossiers[]= [];
  errorMessage!: String;

  
  constructor(
    private service: DossierService,
    private route: Router,
  ) {}

  onGetDossiers() {
    this.service.getAllDossiers().subscribe({
      next : data => {
       this.dossierTable = data;
      },
      error : err => {
         console.log(err);
      }
    })
  }

  detailDossier(id: string) {
    this.route.navigateByUrl('/coach/dossier/' + id);
  }

  editDossier(id: string) {
    this.route.navigateByUrl('/coach/update/' + id);
  }
}
