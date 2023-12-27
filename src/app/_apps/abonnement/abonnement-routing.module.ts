import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AddAbonnementComponent} from "./add-abonnement/add-abonnement.component";
import {AbonnementComponent} from "./abonnement.component";
import {SingleAbonnementComponent} from "./single-abonnement/single-abonnement.component";


const routes: Routes = [
  {path : "nouveau-abonnes" , component : AddAbonnementComponent},
  {path : "abonnes-liste" , component : AbonnementComponent},
  {path : "abonnes-detail/:id" , component : SingleAbonnementComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AbonnementRoutingModule {
}
