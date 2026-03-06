import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  ICompetences
} from 'src/app/shared/models/global.model';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UtilsService } from '../utils/utils.service';
import { AgentService } from './agents.service';
import { IExperience, IFormation, ILangues } from 'src/app/shared/models/coach';

@Component({
  selector: 'app-coach',
  templateUrl: './agents.component.html',
  styleUrls: ['./agents.component.css'],
})
export class AgentsComponent implements OnInit {
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

  formationDATA!: Observable<Array<IFormation>>;
  langueDATA!: Observable<Array<ILangues>>;
  experienceDATA!: Observable<Array<IExperience>>;
  competenceDATA!: Observable<Array<ICompetences>>;

  constructor(
    private service: UtilsService,
    private coachService: AgentService,
    private toast: ToastService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.Path;
    this.getCompetences();
    this.getLangues();
    this.getFormations();
    this.getExperiences();

    this.coachForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(5), Validators.max(30)]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      dateOfBirt: ['', Validators.required],
      placeBirt: ['', Validators.required],
      nationality: ['', Validators.required],
      professionalExp: ['', Validators.required],
      sexe: ['', Validators.required],
      province: [''],
      territoire: [''],

      phone: ['', []],
      phone1: ['', []],
      email: [''],
      address: ['', [Validators.required]],
      competence: [''],
      startdate: [''],
      enddate: [''],
      langue: [''],
      experience: [''],
      formation: [''],
      imageUpload: [''],
      level: [''],
      id: [''],
      title: [''],
      Faculty: [''],
      startTime: [''],
      Ecole: [''],
      Options: [''],
      startDate: [''],
      endTime: [''],
      company: [''],
      endDate: [''],
      placeOfBirt : ['']
    });
  }



  getFormations() {
    this.formationDATA = this.service.getFormations().pipe(
      catchError((err) => {
        this.Errormessage = err.message();
        console.log(err.message());
        return throwError(err);
      }),
    );
  }

  getExperiences() {
    this.experienceDATA = this.service.getExperiences().pipe(
      catchError((err) => {
        this.Errormessage = err.message;
        return throwError(err);
      }),
    );
  }

  getCompetences() {
    this.competenceDATA = this.service.getCompetences().pipe(
      catchError((err) => {
        this.Errormessage = err.message;
        return throwError(err);
      }),
    );
  }

  getLangues() {
    this.langueDATA = this.service.getLangues().pipe(
      catchError((err) => {
        this.Errormessage = err.message;
        return throwError(err);
      }),
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
