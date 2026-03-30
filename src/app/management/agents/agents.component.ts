import { Component, OnInit } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ToastService } from 'src/app/shared/services/toast.service';
import { UtilsService } from '../utils/utils.service';
import { AgentService } from './agents.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';


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
  loading: boolean = false;

  constructor(
    private service: UtilsService,
    private coachService: AgentService,
    private snackBarService: SnackbarService,
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.Path;

    this.coachForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(5), Validators.max(30)]],
      lastname: ['', Validators.required],
      firstname: ['', Validators.required],
      birthdate: ['', Validators.required],
      placeBirt: ['', Validators.required],
      nationality: ['', Validators.required],
      sex: ['', Validators.required],
      etatCivil: [''],
      phoneNumber: ['', []],
      phoneNumber1: ['', []],
      filiation: [''],
      email: [''],
      matricule: [''],
      fonction: [''],
      service: [''],
      address: [''],
      placeOfBirt: [''],
    });
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

  createAgent() {
    this.coachService.createAgent(this.coachForm.value).subscribe({
      next: (data) => {
        setTimeout(() => {
          this.snackBarService.showSuccessMessage(
            "L'Agent à été crée avec succèss",
          );
          this.coachForm.reset();
        }, 2000);
      },
      error: (error) => {
        this.snackBarService.showErrorMessage;
      },
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.coachForm.controls;
  }

  get nom_coach() {
    return this.coachForm.controls['name'];
  }
  get telephone() {
    return this.coachForm.controls['phoneNumber'];
  }

  get telephone1() {
    return this.coachForm.controls['phoneNumber1'];
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
    return this.coachForm.controls['nationality'];
  }

  get sexe() {
    return this.coachForm.controls['sex'];
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
