import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { IAgent, IExperience } from 'src/app/shared/models/agents';
import { UtilsService } from '../../utils.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { NgFor, NgIf } from '@angular/common';
import { AgentService } from 'src/app/management/agents/agents.service';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-create-experience',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf, NgFor],
  templateUrl: './createExperience.html',
  styleUrl: './createExperience.css',
})
export class CreateExperience implements OnInit {
  experienceForm: FormGroup | any;
  experienceDATA: IExperience[] = [];
  loading: boolean = false;
  errorMessage: String = '';

  agentData: IAgent[] = [];

  selectedRowIndex: number | null = null;
  searchText: string = '';
  searchControl = new FormControl('');

  filteredAgents: IAgent[] = [];

  constructor(
    private service: UtilsService,
    private serviceAgent: AgentService,
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
  ) {
    this.experienceForm = this.fb.group({
      agentId: [''],
      name: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      sex: ['', [Validators.required]],
      id: [null],
      i : [""],
      experiences : this.fb.array([]),
    });
  }

  ngOnInit(): void {
    this.getAllAgents();
  }

  selectRow(index: number) {
    this.selectedRowIndex = index;
  }

  get experiences(): FormArray {
    return this.experienceForm.get('experiences') as FormArray;
  }

  addExperience(): void {
    this.experiences.push(
      this.fb.group({
        title: ['', [Validators.required]],
        company: ['', [Validators.required]],
        startdate: ['', [Validators.required]],
        enddate: ['', [Validators.required]],
        description: ['', [Validators.required]],
      }),
    );
  }

  removeExperience(index: number): void {
    this.experiences.removeAt(index);
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
        this.experienceForm.patchValue({
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

  onSubmit() {
    this.loading = true;
    if (this.experienceForm.valid) {
      this.service.createExperience(this.experienceForm.value).subscribe({
        next: (data) => {
          setTimeout(() => {
            this.snackbarService.showSuccessMessage(
              'Experience is created successfully',
            );
            this.experienceForm.reset();
            this.experienceForm.reset();
          }, 2000);
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
    }
  }

  get title() {
    return this.experienceForm.controls['title'];
  }

  get company() {
    return this.experienceForm.controls['company'];
  }

  get options() {
    return this.experienceForm.controls['description'];
  }
}
