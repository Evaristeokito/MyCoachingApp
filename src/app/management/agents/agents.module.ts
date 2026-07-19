import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgentsComponent } from './agents.component';
import { MaterialsModule } from 'src/app/core/material/materials.module';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { AgentsRoutingModule } from './agents-routing.module';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { UpdateAgentsComponent } from './update-agents/update-agents.component';
import { AgentsSingleComponent } from './agents-details/agents-single.component';
import { CarteServiceAgent } from "./carte-service-agent/carte-service-agent";
import { PreviewsCardAgent } from "./previews-card-agent/previews-card-agent";

@NgModule({
  declarations: [
    AgentsComponent,
    UpdateAgentsComponent,
    AgentsTableComponent,
    AgentsSingleComponent,
  ],
  exports: [
    AgentsComponent,
    UpdateAgentsComponent,
    AgentsTableComponent,
    AgentsSingleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AgentsRoutingModule,
    MaterialsModule,
    FormsModule,
    CarteServiceAgent,
    PreviewsCardAgent
],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AgentsModule {}
