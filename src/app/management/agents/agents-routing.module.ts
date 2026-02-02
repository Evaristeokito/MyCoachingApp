import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentsComponent } from './agents.component';
import { AgentsTableComponent } from './agents-table/agents-table.component';
import { UpdateAgentsComponent } from './update-agents/update-agents.component';
import { AgentsSingleComponent } from './agents-details/agents-single.component';


const routes: Routes = [
  {path : "save",component:AgentsComponent},
  {path : "show" , component : AgentsTableComponent},
  {path : "update/:id" , component : UpdateAgentsComponent},
  {path : "single/:id" , component  : AgentsSingleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentsRoutingModule { }
