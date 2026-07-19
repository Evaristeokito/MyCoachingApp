import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormsModule
} from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';
import { AgentService } from '../../agents/agents.service';
import { Router } from '@angular/router';
import { IAgent } from 'src/app/shared/models/agents';
import { DossierService } from '../DossierService';

@Component({
  selector: 'app-create-dossier',
  standalone: true,
  imports: [NgIf, 
    NgFor, 
    ReactiveFormsModule,

  ],
  templateUrl: './create-dossier.html',
  styleUrl: './create-dossier.css',
})
export class CreateDossier implements OnInit {
  form!: FormGroup;
  agents: IAgent[] = [];
  filteredAgents: IAgent[] = [];

  selectedAgent?: IAgent;
  searchAgent = '';

  isLoadingAgents = true;
  isSubmitting = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private dossierCreateService: DossierService,
    private agentService: AgentService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.loadAgents();
  }

  initForm(): void {
    this.form = this.fb.group({
      agentId: [null, Validators.required],
      numeroDossier: ['', Validators.required],
      version: ['', Validators.required],
      resume_professionnel: [
        '',
        [Validators.required, Validators.minLength(10)],
      ],
    });
  }

  loadAgents() {
    this.agentService.getAgents().subscribe({
      next: (data) => {
        this.agents = data;
        this.filteredAgents = data;
        this.isLoadingAgents = false;
      },
      error: () => {
        this.errorMessage = 'Impossible de charger la liste des agents.';
        this.isLoadingAgents = false;
      },
    });
  }

  filterAgents(): void {
    const term = this.searchAgent.toLowerCase().trim();

    this.filteredAgents = this.agents.filter((d) =>
      `${d.name} ${d.lastname} ${d.firstname}`
        .toLowerCase()
        .includes(term),
    );
  }

  assignAgent(agent: IAgent): void {
    this.selectedAgent = agent;
    this.form.patchValue({ agentId: agent.id });
  }

  submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;
    this.errorMessage = '';

    this.dossierCreateService.createDossier(this.form.value).subscribe({
      next: () => {
        this.isSubmitting = false;
        this.router.navigate(['management/dossiers/show']);
      },
      error: () => {
        this.errorMessage = 'Une erreur est survenue lors de l’enregistrement.';
        this.isSubmitting = false;
      },
    });
  }

  isInvalid(field: string): boolean {
    const control = this.form.get(field);
    return !!control && control.invalid && control.touched;
  }

  getAgentFullName(ag: IAgent): string {
    return `${ag.name} ${ag.lastname} ${ag.firstname}`;
  }
}
