import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {DashboardComponent, MainComponent} from './core/_composants';
import { Langues } from './management/utils/langues/langues';
import { Experience } from './management/utils/experience/experience';
import { Competence } from './management/utils/competence/competence';
import { Formations } from './management/utils/formations/formations';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', component: DashboardComponent},
      {
        path: 'management',
        loadChildren: () =>
          import("./management/admin.module").then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'coach',
        loadChildren: () =>
          import('./management/agents/agents.module').then(
            (m) => m.AgentsModule
          ),
      },
      {path: 'langue-parlee', component: Langues},
      {path: 'experience-pro', component: Experience},
      {path: 'competences', component: Competence},
      {path: 'formations', component: Formations}
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
