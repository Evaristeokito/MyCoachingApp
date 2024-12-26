import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { catchError, Observable, throwError } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { ICommune } from 'src/app/shared/models/commune';
import { ICreneau } from 'src/app/shared/models/creneau';
import {
  ICivilite,
  IColors,
  INationalite,
  IPoids,
  ITaille,
} from 'src/app/shared/models/global.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import { CoachService } from '../coach.service';
import { UtilsService } from '../../utils/utils.service';
import {CiviliteService} from "../../utils/civilite/civilite.service";

@Component({
  selector: 'app-update-coach',
  templateUrl: './update-coach.component.html',
  styleUrls: ['./update-coach.component.css'],
})
export class UpdateCoachComponent implements OnInit {
  Path = {
    user: 'assets/img/user.jpeg',
  };

  coachForm: FormGroup | any;

  public imagePath: any;
  imageURL: any;
  useFile: any;
  Errormessage?: String = '';
  submitted = false;
  coach_id: Number | any;

  CreneauDatas!: Observable<Array<ICreneau>>;
  CivilitesData!: Observable<Array<ICivilite>>;
  CouleurData!: Observable<Array<IColors>>;
  NationalitesData!: Observable<Array<INationalite>>;
  PoidsData!: IPoids | any;
  TailleData!: ITaille | any;
  communeData!: ICommune | any;

  constructor(
    private service: UtilsService,
    private coachService: CoachService,
    private serviceCivility: CiviliteService,
    private toast: ToastService,
    private activdRouter: ActivatedRoute,
    private fb: FormBuilder
  ) {
    this.coach_id = this.activdRouter.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.Path;
    this.onGetCreneauData();
    this.getSelectedCivilites();
    this.getSelectedCouleursYeux();
    this.getNationalites();
    this.onGetCommune();
    this.onGetPoids();
    this.onGetTaille();

    this.coachForm = this.fb.group({
      nom_coach: [''],
      telephone: [''],
      telephone1: [''],
      email: [''],
      danais: [''],
      lieu_naissance: [''],
      nationalite: [''],
      taille: [''],
      poids: [''],
      experience_pro: [''],
      couleurYeux: [''],
      sexe: [''],
      civilite: [''],
      imageUpload: [''],
      joursD: [''],
      heureD: [''],
      heureF: [''],
      quartier: [''],
      commune: [''],
      avenue: [''],
      numero: [''],
    });

    this.editerCoach();
  }

  createCoach() {}

  editerCoach() {
    this.coachService.getCoach(this.coach_id).subscribe({
      next: (data) => {
        this.coachForm.patchValue({
          nom_coach: data.name,
          telephone: data.phoneNumber,
          telephone1: data.phoneNumber1,
          email: data.email,
          danais: data.dateOfBirt,
          lieu_naissance: data.placeOfBirt,
          nationalite: data.nationalite.name,
          taille: data.taille.taille,
          experience_pro: data.professionalExp,
          couleurYeux: data.couleurYeux.name,
          sexe: data.sex,
          civilite: data.civilite.name,
        });
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onGetCreneauData() {
    this.CreneauDatas = this.service.getCreneaux().pipe(
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

  getOneCreneau(id: string) {
    this.service.getCreneau(id).subscribe({
      next: (data) => {
        this.coachForm.patchValue({
          heureD: data.startTime,
          heureF: data.endTime,
          joursD: data.day,
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
    this.CouleurData = this.service.getCouleursYeux().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        return throwError(err);
      })
    );
  }

  getNationalites() {
    this.NationalitesData = this.service.getNationalites().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        return throwError(err);
      })
    );
  }

  onGetCommune() {
    this.service.getCommunes().subscribe({
      next: (data) => {
        this.communeData = data;
      },
      error: (err) => {
        console.log(err.message());
      },
    });
  }

  onGetPoids() {
    this.service.getPoids().subscribe({
      next: (data) => {
        this.PoidsData = data;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
  }

  onGetTaille() {
    this.service.getTailles().subscribe({
      next: (data) => {
        this.TailleData = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
