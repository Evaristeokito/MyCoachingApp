import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DossierService } from '../DossierService';
import { DatePipe, NgIf, NgForOf, NgFor } from '@angular/common';
import { Dossiers } from '../dossiers';
import { ICompetences } from 'src/app/shared/models/agents';
import { IAgent } from 'src/app/shared/models/dossiers';

@Component({
  selector: 'app-details-dossier',
  standalone: true,
  imports: [DatePipe, NgIf, NgFor],
  templateUrl: './details-dossier.html',
  styleUrl: './details-dossier.css',
})
export class DetailsDossier implements OnInit {
  public age: any;
  dossiers!: IAgent;
  isLoading = true;

  constructor(
    private activeRouter: ActivatedRoute,
    private dossierService: DossierService,
  ) {}

  ngOnInit(): void {
    const id = this.activeRouter.snapshot.paramMap.get('id');
    this.loadAgentDetail(id);
  }

  loadAgentDetail(id: any): void {
    this.dossierService.getDossier(id).subscribe({
      next: (data) => {
        this.dossiers = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur chargement détail agent', error);
        this.isLoading = false;
      },
    });
  }

  getInitials(name?: string): string {
    if (!name) return 'AG';

    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  display(value?: string): string {
    return value && value.trim() !== '' ? value : 'À définir';
  }
}
