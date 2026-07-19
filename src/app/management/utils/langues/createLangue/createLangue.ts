import { NgFor, NgIf } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormArray, 
  FormBuilder, 
  FormGroup, 
  ReactiveFormsModule,
  Validators, 
  FormControl} from '@angular/forms';
import { IAgent, ILangues } from 'src/app/shared/models/agents';
import { UtilsService } from '../../utils.service';
import { ToastService } from 'src/app/shared/services/toast.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { AgentService } from 'src/app/management/agents/agents.service';
import { debounce, debounceTime } from 'rxjs';

@Component({
  selector: 'app-create-langue',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor],
  templateUrl: './createLangue.html',
  styleUrl: './createLangue.css',
})
export class CreateLangue implements OnInit {
  languagesList = [
    { id: 1, name: 'Français' },
    { id: 2, name: 'Anglais' },
    { id: 3, name: 'Lingala' },
    { id: 4, name: 'Swahili' },
  ];

  langueForm: FormGroup | any;
  loading: boolean = false;
  errorMessage: String = '';
  langueData: ILangues[] = [];
  agentData: IAgent[] = [];

  selectedRowIndex: number | null = null;
  searchText: string = '';
  searchControl = new FormControl('');

  filteredAgents: IAgent[] = [];

  constructor(
    private service: UtilsService,
    private fb: FormBuilder,
    private toast: ToastService,
    private agentService: AgentService,
    private snackbarService: SnackbarService,

  ) {
    this.langueForm = this.fb.group({
      agentId: [""],
      name: ["", [Validators.required]],
      level: ["", [Validators.required]],
      lastname: ["", [Validators.required]],
      firstname: ["" ,[Validators.required]],
      sex: ["",[Validators.required]],
      etatCivil: ["" ,[Validators.required]],
      Observation: ["" ,[Validators.required]],
      i : [""],
      languages: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getAllAgents();
  }

  languesForms() {}

  get languages(): FormArray {
    return this.langueForm.get('languages') as FormArray;
  }

  addLanguage(): void {
    this.languages.push(
      this.fb.group({
        name: [null, Validators.required],
        level: ['', Validators.required],
      }),
    );
  }

  removeLanguage(index: number): void {
    this.languages.removeAt(index);
  }

  getLangues() {
    this.service.getLangues().subscribe({
      next: (data) => {
        this.langueData = data;
      },
      error: (error: any) => {
        console.log(error.error.message);
      },
    });
  }

  getAllAgents() {
    this.agentService.getAgents().subscribe({
      next: (data) => {
        this.agentData = data;
        this.filteredAgents = data;

        this.searchControl.valueChanges
          .pipe(debounceTime(300))
          .subscribe((value) => {
            const keyword = (value || '').toLowerCase();

            this.filteredAgents = this.agentData.filter(
              (langue) =>
                langue.name.toLowerCase().includes(keyword) ||
                langue.firstname.toLowerCase().includes(keyword) ||
                langue.lastname.toLowerCase().includes(keyword),
            );
          });
      },
      error: (error) => {
        console.log(error.error.message);
      },
    });
  }

  onSubmit() {
    this.service.createLangue(this.langueForm.value).subscribe({
      next: (data) => {
        this.toast.toastSuccess('Succès', 'Langue créée avec succès');
      },
      error: (err) => {
        console.log(err);
        this.toast.toastFailure('Erreur', 'Une erreur est survenue lors de la création de la langue');
      }
    });
  }

  getAgentById(id: string) {
    this.agentService.getAgent(id).subscribe({
      next: (data) => {
        this.langueForm.patchValue({
          agentId: data.id,
          name: data.name,
          firstname: data.lastname,
          lastname: data.firstname,
          placeBirt: data.placeBirth,
          birthdate: data.birthdate,
          nationality: data.nationality,
          sex: data.sex,
          etatCivil: data.etatCivil,
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  selectRow(index: number) {
    this.selectedRowIndex = index;
  }

  filterLanguesAgents() {
    const keyword = this.searchText.toLowerCase();

    this.filteredAgents = this.agentData.filter(
      (langue) =>
        langue.name.toLowerCase().includes(keyword) ||
        langue.firstname.toLowerCase().includes(keyword) ||
        langue.lastname.toLowerCase().includes(keyword),
    );
  }

  get Name() {
    return this.langueForm.controls['name'];
  }

  get Level() {
    return this.langueForm.controls['level'];
  }
}
