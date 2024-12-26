import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './account/login/login.component';
import {RegisterComponent} from './account/register/register.component';
import {DashboardComponent, MainComponent} from './core/_composants';
import {NationaliteComponent} from './management/utils/nationalite/nationalite.component';
import {CiviliteComponent} from './management/utils/civilite/civilite.component';
import {CommuneComponent} from './management/utils/commune/commune.component';
import {TailleComponent} from './management/utils/taille/taille.component';
import {PoidsComponent} from './management/utils/poids/poids.component';
import {ExerciceSansCoachComponent} from './management/exercice-sportif-single/exercice-sans-coach.component';
import {CouleurComponent} from './management/utils/couleurs/couleur.component';
import {AbonnementComponent} from './management/subscription/abonnement.component';
import {CreneauComponent} from './management/utils/creneau/creneau.component';

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
          import('./management/coach/coachs.module').then(
            (m) => m.CoachsModule
          ),
      },
      {
        path: 'subscribe',
        loadChildren: () =>
          import('./management/subscription/abonnement.module').then(
            (m) => m.AbonnementModule
          ),
      },
      {
        path: 'subscribe-no-coach',
        loadChildren: () =>
          import(
            './management/single-subscription/abonnement-sans-coach.module'
            ).then((e) => e.AbonnementSansCoachModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./management/customers/customer.module').then((e) => e.CustomerModule)
      },
      {
        path: 'exercise-sportif',
        loadChildren: () =>
          import('./management/exercice-sportif/exercice.module').then(
            (e) => e.ExerciceModule
          ),
      },

      {path: 'nationalite', component: NationaliteComponent},
      {path: 'civilite', component: CiviliteComponent},
      {path: 'commune', component: CommuneComponent},
      {path: 'taille', component: TailleComponent},
      {path: 'poids', component: PoidsComponent},
      {path: 'exercise-sans-coach', component: ExerciceSansCoachComponent},
      {path: 'couleur-des-yeux', component: CouleurComponent},
      {path: 'abonnement', component: AbonnementComponent},
      {path: 'creneau_sportif', component: CiviliteComponent},
      {path: 'creneau', component: CreneauComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
