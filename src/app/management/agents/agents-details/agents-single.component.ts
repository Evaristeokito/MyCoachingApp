import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgentService } from '../agents.service';
import { finalize } from 'rxjs';
import { AgentCardInstitution, IAgent, LookupValue } from 'src/app/shared/models/agents';

@Component({
  selector: 'app-coach-single',
  templateUrl: './agents-single.component.html',
  styleUrls: ['./agents-single.component.css'],
})
export class AgentsSingleComponent implements OnInit {
  @Output() cardRequested = new EventEmitter<IAgent>();

  agent?: IAgent;
  cardAgent?: IAgent;
  loading = true;
  errorMessage = '';

  readonly emptyLabel = 'A definir';

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly agentService: AgentService,
  ) {}

  readonly cardInstitution: AgentCardInstitution = {
    country: 'REPUBLIQUE DEMOCRATIQUE DU CONGO',
    ministry: "MINISTERE DE L'EMPLOI, TRAVAIL ET PREVOYANCE SOCIALE",
    title: 'CARTE DE SERVICE',
    regionCode: 'RDC',
    serialLabel: 'N° Matricule',
    issueDate: new Date(),
    expiryDate: '2030-12-31',
    verificationBaseUrl: 'https://votre-domaine.com/agents/verify',
  };

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (!id) {
      this.loading = false;
      this.errorMessage = "Identifiant de l'agent introuvable.";
      return;
    }

    this.agentService
      .getAgent(id)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (agent) => (this.agent = agent),
        error: () => {
          this.errorMessage =
            "Impossible de recuperer les informations depuis l'API Spring Boot.";
        },
      });
  }

  retourListe(): void {
    this.router.navigate(['/management/agents/show']);
  }

  genererCarte(agent: IAgent): void {
    this.cardAgent = agent;
  }

  fermerCarte(): void {
    this.cardAgent = undefined;
  }

  imprimerCarte(): void {
    window.print();
  }

  displayName(agent = this.agent): string {
    const fullName =
      this.clean(agent?.name) +
      ' ' +
      ' ' +
      agent?.lastname +
      ' ' +
      ' ' +
      agent?.firstname;

    if (fullName) {
      return fullName;
    }

    const name = [
      this.clean(agent?.name),
      this.clean(agent?.lastname),
      this.clean(agent?.firstname),
    ]
      .filter(Boolean)
      .join(' ');

    return name || 'Agent';
  }

  field(...values: LookupValue[]): string {
    for (const value of values) {
      const normalized = this.lookupText(value);

      if (normalized) {
        return normalized;
      }
    }

    return this.emptyLabel;
  }

  dateField(value?: string | Date | null): string {
    if (!value) {
      return this.emptyLabel;
    }

    const date = value instanceof Date ? value : new Date(value);

    if (Number.isNaN(date.getTime())) {
      return this.clean(String(value)) || this.emptyLabel;
    }

    return new Intl.DateTimeFormat('fr-FR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    })
      .format(date)
      .replace('.', '');
  }

  initials(agent = this.agent): string {
    return this.displayName(agent)
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  }

  avatarUrl(agent = this.agent): string | null {
    const source =
      this.clean(agent?.photoUrl) ||
      this.clean(agent?.avatarUrl) ||
      this.clean(agent?.photo);

    if (!source) {
      return null;
    }

    if (
      source.startsWith('http') ||
      source.startsWith('/') ||
      source.startsWith('data:') ||
      source.startsWith('blob:')
    ) {
      return source;
    }

    return `data:image/jpeg;base64,${source}`;
  }

  private lookupText(value: LookupValue): string {
    if (value === null || value === undefined) {
      return '';
    }

    if (typeof value === 'object') {
      return (
        this.clean(value.libelle) ||
        this.clean(value.label) ||
        this.clean(value.nom) ||
        this.clean(value.name) ||
        this.clean(value.designation)
      );
    }

    return this.clean(String(value));
  }

  private clean(value?: string | null): string {
    const normalized = value?.trim();

    if (!normalized || normalized === 'null' || normalized === 'undefined') {
      return '';
    }

    return normalized;
  }
}