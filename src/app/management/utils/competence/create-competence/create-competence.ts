import {
  Component,
  type OnInit,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, 
  ReactiveFormsModule, 
  Validators } from '@angular/forms';
import { UtilsService } from '../../utils.service';
import { SnackbarService } from 'src/app/shared/services/snackbar.service';
import { NgFor, NgIf } from '@angular/common';
import { IAgent, ICompetences } from 'src/app/shared/models/agents';
import { AgentService } from 'src/app/management/agents/agents.service';
import { debounceTime } from 'rxjs';


@Component({
  selector: 'app-create-competence',
  standalone: true,
  imports: [NgIf, ReactiveFormsModule, NgFor],
  templateUrl: './create-competence.html',
  styleUrl: './create-competence.css',
})
export class CreateCompetence implements OnInit {

  competenceForm: FormGroup | any;
  competenceDATA: ICompetences[] = [];
  loading: boolean = false;
  errorMessage: String = '';

  agentData: IAgent[] = [];

  selectedRowIndex: number | null = null;
  searchText: string = '';
  searchControl = new FormControl('');

  filteredAgents: IAgent[] = [];

  constructor(
    private service: UtilsService,
    private serviceAgent : AgentService,
    private fb: FormBuilder,
    private snackbarService: SnackbarService,
  ) {
    this.competenceForm = this.fb.group({
      id: [null],
      name: [null, [Validators.required]],
      firstname: ['', Validators.required],
      lastname : ['' , Validators.required],
      level: [null, [Validators.required]],
      description: [null, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getAllAgents();
  }

  getCompetences() {
    this.service.getCompetences().subscribe({
      next: (data) => {
        this.competenceDATA = data;
      },
      error: (err) => {
        console.log(err.message);
      },
    });
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

  onSubmit() {
    this.loading = true;
    if (this.competenceForm.valid) {
      this.service.createCompetences(this.competenceForm.value).subscribe({
        next: (data) => {
          setTimeout(() => {
            this.snackbarService.showSuccessMessage(
              'Competence is created successfully',
            );
            this.competenceForm.reset();

            this.competenceForm.reset();
          }, 2000);
        },
        error: (err) => {
          console.log(err.error.message);
        },
      });
    }
  }

  selectRow(index: number) {
    this.selectedRowIndex = index;
  }

  getAgentById(id: string) {
    this.serviceAgent.getAgent(id).subscribe({
      next: (data) => {
        this.competenceForm.patchValue({
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

  get name() {
    return this.competenceForm.controls['name'];
  }

  get observation() {
    return this.competenceForm.controls['observation'];
  }

  get level() {
    return this.competenceForm.controls['level'];
  }
}
