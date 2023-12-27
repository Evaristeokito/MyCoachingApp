import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AbonnementSansCoachComponent } from './abonnement-sans-coach.component';
import { AbonnementSansSingleComponent } from './abonnement-sans-single/abonnement-sans-single.component';
import { AbonnementSansTableComponent } from './abonnement-sans-table/abonnement-sans-table.component';
import { AddAbonnementSansCoachComponent } from '../index.coach';


const routes: Routes = [
  {path : "abonnement-sans-coach", component : AbonnementSansCoachComponent},
  {path : "abonnement-sans-coach-creation" , component : AddAbonnementSansCoachComponent},
  {path : "abonnement-sans-coach-single/:id" , component : AbonnementSansSingleComponent},
  {path : "abonnement-sans-coach-table" , component :AbonnementSansTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnementSansCoachRoutingModule {
}
