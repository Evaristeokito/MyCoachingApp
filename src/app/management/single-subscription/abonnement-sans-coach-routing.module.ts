import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AbonnementSansCoachComponent } from './abonnement-sans-coach.component';
import { AbonnementSansSingleComponent } from './abonnement-sans-single/abonnement-sans-single.component';
import { AbonnementSansTableComponent } from './abonnement-sans-table/abonnement-sans-table.component';


const routes: Routes = [
  {path : "create", component : AbonnementSansCoachComponent},
  {path : "details/:id" , component : AbonnementSansSingleComponent},
  {path : "list" , component :AbonnementSansTableComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnementSansCoachRoutingModule {
}
