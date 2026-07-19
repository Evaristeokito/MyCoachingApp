import {  Component, EventEmitter, Input, Output } from '@angular/core';
import { AgentCardInstitution, IAgent } from 'src/app/shared/models/agents';
import { displayName } from '../carte-service-agent/agent-view-utils';
import { CarteServiceAgent } from "../carte-service-agent/carte-service-agent";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-previews-card-agent',
  standalone: true,
  imports: [CarteServiceAgent,NgIf],
  templateUrl: './previews-card-agent.html',
  styleUrl: './previews-card-agent.css',
})
export class PreviewsCardAgent {
  @Input({ required: true }) agent!: IAgent;
  @Input() institution?: AgentCardInstitution;
  @Output() closed = new EventEmitter<void>();

  displayName = displayName;

  close(): void {
    this.closed.emit();
  }

  print(): void {
    window.print();
  }
}
