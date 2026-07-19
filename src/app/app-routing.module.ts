import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {DashboardComponent, MainComponent} from './core/_composants';
import { Langues } from './management/utils/langues/langues';
import { Experience } from './management/utils/experience/experience';
import { Competence } from './management/utils/competence/competence';
import { Formations } from './management/utils/formations/formations';
import { CreateFormation } from './management/utils/formations/createFormation/createFormation';
import { CreateCompetence } from './management/utils/competence/create-competence/create-competence';
import { CreateExperience } from './management/utils/experience/createExperience/createExperience';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      {
        path: 'management',
        loadChildren: () =>
          import('./management/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'coach',
        loadChildren: () =>
          import('./management/agents/agents.module').then(
            (m) => m.AgentsModule,
          ),
      },
      {
        path: 'dossiers',
        loadChildren: () =>
          import('./management/dossiers/dossiers.module').then(
            (m) => m.DossiersModule,
          ),
      },
      { path: 'langue-parlee', component: Langues },
      { path: 'create-competences', component: CreateCompetence },
      { path: 'create-experienceprofessionnel', component: CreateExperience },
      { path: 'experience-pro', component: Experience },
      { path: 'competences', component: Competence },
      { path: 'formations', component: Formations },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
