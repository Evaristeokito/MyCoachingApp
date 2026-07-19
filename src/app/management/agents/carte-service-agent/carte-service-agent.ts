import { NgIf } from '@angular/common';
import {Component, Input, type OnInit } from '@angular/core';
import { AgentCardInstitution, IAgent } from 'src/app/shared/models/agents';
import { avatarUrl, dateField, displayName, field, firstName, initials, lastName, qrPayload } from './agent-view-utils';
import { QRCodeComponent } from 'angularx-qrcode';

@Component({
  selector: 'app-carte-service-agent',
  standalone: true,
  imports: [NgIf, QRCodeComponent],
  templateUrl: './carte-service-agent.html',
  styleUrl: './carte-service-agent.css',
})
export class CarteServiceAgent implements OnInit {
  ngOnInit(): void {}

  @Input({ required: true }) agent!: IAgent;
  @Input() organisationName = 'Service administratif';
  @Input() organisationSubtitle = 'Carte de service';
  @Input() validityLabel = 'Carte valide';

  readonly defaultInstitution: AgentCardInstitution = {
    country: 'REPUBLIQUE DEMOCRATIQUE DU CONGO',
    ministry: "MINISTERE DE L'EMPLOI, TRAVAIL ET PREVOYANCE SOCIALE",
    title: 'CARTE DE SERVICE',
    regionCode: 'RDC',
    serialLabel: 'N° Carte',
    verificationBaseUrl: 'https://votre-domaine.com/agents/verify',
  };

  cardInstitution: AgentCardInstitution = { ...this.defaultInstitution };

  @Input() set institution(value: AgentCardInstitution | undefined) {
    this.cardInstitution = {
      ...this.defaultInstitution,
      ...(value ?? {}),
    };
  }

  displayName = displayName;
  firstName = firstName;
  lastName = lastName;
  field = field;
  dateField = dateField;
  initials = initials;
  avatarUrl = avatarUrl;

  qrValue(): string {
    return qrPayload(this.agent, this.cardInstitution);
  }
}
