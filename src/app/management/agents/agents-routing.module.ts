import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents.component';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { UpdateAgentsComponent } from './update-agents/update-agents.component';
import { AgentsSingleComponent } from './agents-details/agents-single.component';
import { Dossiers } from '../dossiers/dossiers';
import { DetailsDossier } from '../dossiers/details-dossier/details-dossier';
import { CreateDossier } from '../dossiers/create-dossier/create-dossier';


const routes: Routes = [
  { path: 'save', component: AgentsComponent },
  { path: 'show', component: AgentsTableComponent },
  { path: 'update/:id', component: UpdateAgentsComponent },
  { path: 'single/:id', component: AgentsSingleComponent },
  { path: 'dossiers', component: Dossiers },
  { path: 'dossier/:id', component: DetailsDossier },
  { path: 'dossiers/create', component: CreateDossier }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
