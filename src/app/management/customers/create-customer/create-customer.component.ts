import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { CoachService } from '../../coach/coach.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UtilsService } from '../../utils/utils.service';
import {CiviliteService} from "../../utils/civilite/civilite.service";

@Component({
  selector: 'app-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css'],
})
export class CreateCustomerComponent implements OnInit {
  Path = {
    user: 'assets/img/user.jpeg',
  };

  clientForm: FormGroup | any;

  public imagePath: any;
  imageURL: any;
  useFile: any;
  Errormessage?: String = '';

  CreneauDatas!: Observable<Array<any>>;
  CivilitesData!: Observable<Array<any>>;
  CouleurData!: Observable<Array<any>>;
  NationalitesData!: Observable<Array<any>>;
  PoidsData!:  any;
  TailleData!: any;
  communeData!:  any;

  constructor(
    private coachService: CoachService,
    private utilsSservice : UtilsService,
    private toast: ToastService,
    private serviceCivility : CiviliteService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.Path;

    this.Path;
    this.onGetCreneauData();
    this.getSelectedCivilites();
    this.getSelectedCouleursYeux();
    this.getNationalites();
    this.onGetCommune();
    this.onGetPoids();
    this.onGetTaille();

    this.clientForm = this.fb.group({
      nom: ['', [Validators.required]],
      nom_client : ['',[]],
      telephone: ['', Validators.required],
      telephone1 : [''],
      couleurYeux  : [''],
      email: ['', Validators.email],
      danais: ['', Validators.required],
      lieu_naissance: ['', Validators.required],
      nationalite: ['', Validators.required],
      taille: ['', Validators.required],
      poids: ['', Validators.required],
      experience_pro: ['', Validators.required],
      couleur_des_yeux: ['', Validators.required],
      sexe: ['', Validators.required],
      civilite: ['', Validators.required],
      imageUpload: [''],
      day: [''],
      startTime: [''],
      endTime: [''],
      quartier: [''],
      commune: [''],
      avenue: [''],
      numero: [''],
    });
  }

  onSaveClient() {}

  onGetCreneauData() {
    this.CreneauDatas = this.utilsSservice.getCreneaux().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        console.log(err.message());
        return throwError(err);
      })
    );
  }

  onSelectFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.useFile = file;
      var mimeType = event.target.files[0].type;

      if (mimeType.match(/image\/*/) == null) {
        this.Errormessage = 'Only image are not supported';
        return;
      }

      var reader = new FileReader();
      this.imagePath = File;
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imageURL = reader.result;
      };
    }
  }
  fileName: String = '';
  onFileInput(e: any) {
    this.fileName = e.target.files[0].name;
  }

  getOneCreneau(id: any) {
    this.utilsSservice.getCreneau(id).subscribe({
      next: (data) => {
        this.clientForm.patchValue({
          startTime: data.startTime,
          endTime: data.endTime,
          day: data.day,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  createClient() {}

  getSelectedCivilites() {
    this.CivilitesData = this.serviceCivility.getCivilities().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        return throwError(err);
      })
    );
  }

  getSelectedCouleursYeux() {
    this.CouleurData = this.utilsSservice.getCouleursYeux().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        return throwError(this.Errormessage);
      })
    );
  }

  getNationalites() {
    this.NationalitesData = this.utilsSservice.getNationalites().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        return throwError(this.Errormessage);
      })
    );
  }

  onGetCommune() {
    this.utilsSservice.getCommunes().subscribe({
      next: (data) => {
        this.communeData = data;
      },
      error: (err) => {
        console.log(err.message());
      },
    });
  }

  onGetPoids() {
    this.utilsSservice.getPoids().subscribe({
      next: (data) => {
        this.PoidsData = data;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  onGetTaille() {
    this.utilsSservice.getTailles().subscribe({
      next: (data) => {
        this.TailleData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
