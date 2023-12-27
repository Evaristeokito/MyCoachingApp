import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent, DashboardComponent } from './_composants';
import {
  AbonnementComponent,
  NationaliteComponent,
  CouleurComponent, CommuneComponent, ExerciceSansCoachComponent
} from './_apps/index.coach';
import { CiviliteComponent } from './_apps/civilite/civilite.component';
import { CreneauComponent } from './_apps/creneau/creneau.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import {TailleComponent} from "./_apps/taille/taille.component";
import {PoidsComponent} from "./_apps/poids/poids.component";


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path : 'client' , loadChildren : () => import("./_apps/clients/client.module").then(m=>m.ClientModule)},
      { path: 'coach',loadChildren : () => import("./_apps/coach/coachs.module").then(m => m.CoachsModule) },
      { path : 'abonnement' , loadChildren : () => import("./_apps/abonnement/abonnement.module").then(m=> m.AbonnementModule)},
      { path : 'abonnement-sans' , loadChildren : () => import("./_apps/abonnement-sans-coach/abonnement-sans-coach.module").then(e => e.AbonnementSansCoachModule)},
      {path : 'exercise-sportif' , loadChildren : ()=> import("./_apps/exercices/exercice.module").then(e=>e.ExerciceModule)},

      { path: 'nationalite', component: NationaliteComponent },
      {path : 'civilite' ,component:CiviliteComponent},
      { path: 'commune', component: CommuneComponent },
      {path : 'taille' , component:TailleComponent},
      {path : 'poids' , component:PoidsComponent},
    
      {path : 'exercise-sans-coach', component : ExerciceSansCoachComponent},
      { path: 'couleur-des-yeux', component: CouleurComponent },
      { path: 'abonnement', component: AbonnementComponent },
      { path: 'creneau_sportif', component: CiviliteComponent },
      { path: 'creneau', component: CreneauComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
