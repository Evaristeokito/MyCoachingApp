import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Competence } from './competence';
import { CreateCommuneComponent } from '../commune/create-commune/create-commune.component';
import { CreateCompetence } from './create-competence/create-competence';


const routes: Routes = [
  { path: 'show', component: Competence },
  { path: 'create', component: CreateCompetence },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompetenceRoutingModule {}
