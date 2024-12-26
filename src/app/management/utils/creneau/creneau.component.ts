import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UtilsService} from "../utils.service";
import {ToastService} from "../../../shared/services/toast.service";
import {catchError, Observable, throwError} from "rxjs";
import {ICreneau} from "../../../shared/models/creneau";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NewCreneauComponent} from "./new-creneau/new-creneau.component";


@Component({
  selector: 'app-creneau-coach',
  templateUrl: './creneau.component.html',
  styleUrls: ['./creneau.component.css'],
})

export class CreneauComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private service: UtilsService,
    private toast: ToastService,
    private dialog : MatDialog
  ) {}

  CreneauForm: FormGroup | any;
  searchCreneauHandler: FormGroup | any;

  Creneau : ICreneau[] = [];

  page = 1;
  pageSize = 5;

  CreneauData!: Observable<Array<ICreneau>>;
  errorMessage!: String;

  Path = {
    logo: 'assets/img/logo.png',
    user: 'assets/img/user.jpg',
  };

  ngOnInit(): void {

    this.getCreneaux();

    this.Path;

    this.searchCreneauHandler = this.fb.group({
      search: [''],
    });

    this.CreneauForm = this.fb.group({
      startTime: ['', [Validators.required]],
      endTime: ['', [Validators.required]],
      day: [[], [Validators.required]],
      state: [''],
    });

  }

  getCreneaux() {
    this.service.getCreneaux().subscribe({
      next : (data) => {
        this.Creneau = data;
      },
      error : (error : any) => {
        console.log(error.error.message)
      }
    })
  }

  onSubmit() {
    if (this.CreneauForm.valid) {
      this.service.createCreneau(this.CreneauForm.value).subscribe({
        next: (data) => {
          this.toast.toastSuccess(
            'Creneau created',
            'creneau is created successfully'
          );
          this.CreneauForm.reset();
        },
        error: (err) => {
          this.toast.toastFailure('Pas de doublons', 'creneau existe déjà');
          this.CreneauForm.reset();
        },
      });
    }
  }

  dialogCreneau(creneauData? : any ){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height =  "580px";
    dialogConfig.position = {top : '7%'};
    dialogConfig.role = "dialog";
    dialogConfig.data = {...creneauData}

    const dialogRef = this.dialog.open(NewCreneauComponent , dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.getCreneaux()
    })
  }


  get heureDebut() {
    return this.CreneauForm.controls['heureDebut'];
  }

  get heureFin() {
    return this.CreneauForm.controls['heureFin'];
  }

  get joursDisponible() {
    return this.CreneauForm.controls['joursDisponible'];
  }

  get etat() {
    return this.CreneauForm.controls['etat'];
  }
}
