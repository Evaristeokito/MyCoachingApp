import { Component,OnInit } from '@angular/core';
import { FormGroup, FormBuilder, 
  Validators, 
  ReactiveFormsModule, 
  FormControl, FormArray } from '@angular/forms';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { UtilsService } from '../../utils.service';
import { IAgent, IFormation, RootFormation } from 'src/app/shared/models/agents';
import { NgFor, NgIf } from '@angular/common';
import { AgentService } from 'src/app/management/agents/agents.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-create-formation',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './createFormation.html',
  styleUrl: './createFormation.css',
})
export class CreateFormation implements OnInit {
  formationForm: FormGroup | any;
  formationDATA: IFormation[] = [];
  loading: boolean = false;
  errorMessage: String = '';

  agentData: IAgent[] = [];

  selectedRowIndex: number | null = null;
  searchText: string = '';
  searchControl = new FormControl('');

  filteredAgents: IAgent[] = [];

  constructor(
    private serviceAgent: AgentService,
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
    private service : UtilsService
  ) {
    this.formationForm = this.fb.group({
      agentId: [''],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      formations: this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getAllAgents();
  }

  getAllAgents() {
    this.serviceAgent.getAgents().subscribe({
      next: (data) => {
        this.agentData = data;
        this.filteredAgents = data;

        this.searchControl.valueChanges
          .pipe(debounceTime(300))
          .subscribe((value) => {
            const keyword = (value || '').toLowerCase();

            this.filteredAgents = this.agentData.filter(
              (f) =>
                f.name.toLowerCase().includes(keyword) ||
                f.firstname.toLowerCase().includes(keyword) ||
                f.lastname.toLowerCase().includes(keyword),
            );
          });
      },
      error: (error) => {
        console.log(error.error.message);
      },
    });
  }

  getAgentById(id: string) {
    this.serviceAgent.getAgent(id).subscribe({
      next: (data) => {
        this.formationForm.patchValue({
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

  formationsForms() {}

  get formations(): FormArray {
    return this.formationForm.get('formations') as FormArray;
  }

  addFormation(): void {
    this.formations.push(
      this.fb.group({
        title: ['', [Validators.required]],
        ecole: ['', [Validators.required]],
        faculty: ['', [Validators.required]],
        startDate: ['', [Validators.required]],
        endDate: ['', [Validators.required]],
        options: ['', [Validators.required]],
      }),
    );
  }

  removeFormation(index: number): void {
    this.formations.removeAt(index);
  }

  onSubmit() {
    const payload: any = {
      agent: {
        id: this.formationForm.value.agentId,
      },
      title: this.formationForm.value.title,
      ecole: this.formationForm.value.ecole,
      faculty: this.formationForm.value.faculty,
      startDate: this.formationForm.value.startDate,
      endDate: this.formationForm.value.endDate,
      options: this.formationForm.value.options,
    };

    this.service.createFormation(this.formationForm.value).subscribe({
      next: (data) => {
        this.snackbarService.showSuccessMessage('Formation créée avec succès');
        this.formationForm.reset();
      },
      error: (err) => {
        console.log(err);
        this.snackbarService.showErrorMessage();
      }
  });

  }
  

  get title() {
    return this.formationForm.controls['title'];
  }

  get ecole() {
    return this.formationForm.controls['ecole'];
  }

  get options() {
    return this.formationForm.controls['options'];
  }
}
