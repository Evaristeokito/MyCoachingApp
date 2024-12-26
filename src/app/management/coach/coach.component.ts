import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CoachService } from './coach.service';
import { ICreneau } from 'src/app/shared/models/creneau';
import {
  ICivilite,
  IColors,
  INationalite,
  IPoids,
  ITaille,
} from 'src/app/shared/models/global.model';
import { ICommune } from 'src/app/shared/models/commune';
import { ToastService } from 'src/app/shared/services/toast.service';
import {CiviliteService} from "../utils/civilite/civilite.service";
import {UtilsService} from "../utils/utils.service";

@Component({
  selector: 'app-coach',
  templateUrl: './coach.component.html',
  styleUrls: ['./coach.component.css'],
})
export class CoachComponent implements OnInit {
  Path = {
    user: 'assets/img/user.jpeg',
  };

  isLinear = false;
  public coachForm: FormGroup | any;

  public imagePath: any;
  imageURL: any;
  useFile: any;
  Errormessage?: String = '';
  submitted = false;

  CreneauDatas!: Observable<Array<ICreneau>>;
  CivilitesData!: Observable<Array<ICivilite>>;
  CouleurData!: Observable<Array<IColors>>;
  NationalitesData!: Observable<Array<INationalite>>;
  PoidsData!: IPoids | any;
  TailleData!: ITaille | any;
  communeData!: ICommune | any;

  constructor(
    private serviceCivility: CiviliteService,
    private service : UtilsService,
    private coachService: CoachService,
    private toast: ToastService,
    private fb: FormBuilder
  ) {}

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
      name: [
        '',
        [Validators.required, Validators.min(5), Validators.max(30)],
      ],
      lastname : ['', Validators.required],
      firstname : ['' , Validators.required],
      dateOfBirt: ['', Validators.required],
      placeOfBirt: ['', Validators.required],
      nationalite: ['', Validators.required],
      taille: ['', Validators.required],
      poids: ['', Validators.required],
      professionalExp: ['', Validators.required],
      couleurYeux: ['', Validators.required],
      civilite: ['', Validators.required],
      sex: ['', Validators.required],
      phoneNumber : ['', []],
      phoneNumber1 : ['' , []],
      email : [''],
      address: ['', [Validators.required]],
      nom_epoux: [''],
      nombre_enfant: [''],
      imageUpload: [''],
      startTime: [''],
      endTime: [''],
      day: [''],
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

  patchCreneau(){
    this.coachForm.patchValue({
    })
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

  createCoach() {
    if (this.coachForm.valid) {
      console.log(this.coachForm.value);
    }
  }

  get f(): { [key: string]: AbstractControl } {
    return this.coachForm.controls;
  }

  get nom_coach() {
    return this.coachForm.controls['nom_coach'];
  }
  get telephone() {
    return this.coachForm.controls['telephone'];
  }

  get telephone1() {
    return this.coachForm.controls['telephone1'];
  }

  get email() {
    return this.coachForm.controls['email'];
  }

  get danais() {
    return this.coachForm.controls['danais'];
  }
  get lieu_naissance() {
    return this.coachForm.controls['lieu_naissance'];
  }

  get nationalite() {
    return this.coachForm.controls['nationalite'];
  }

  get taille() {
    return this.coachForm.controls['taille'];
  }

  get poids() {
    return this.coachForm.controls['poids'];
  }
  get experience_pro() {
    return this.coachForm.controls['experience_pro'];
  }
  get couleurYeux() {
    return this.coachForm.controls['couleurYeux'];
  }

  get sexe() {
    return this.coachForm.controls['sexe'];
  }

  get civilite() {
    return this.coachForm.controls['civilite'];
  }

  get commune() {
    return this.coachForm.controls['commune'];
  }

  get quartier() {
    return this.coachForm.controls['quartier'];
  }

  get avenue() {
    return this.coachForm.controls['avenue'];
  }

  get numero() {
    return this.coachForm.controls['numero'];
  }
}
